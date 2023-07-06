const express = require("express");
const { ObjectId } = require("mongodb");
const { connectToDb, getDb } = require("./db");

const app = express()
app.use(express.json())

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(8000, () => {
      console.log("app listening to port 8000");
    });
    db = getDb();
  }
  else{
    console.log("Error:",err);
  }
});

app.get("/books", (req, res) => {
    let books =[]

    db.collection('books')
        .find()
        .sort({ 'author': 1 })
        .toArray()
        .then((books) => {
            console.log("Fetched books:", books); // Check if books are being fetched
            res.status(200).json(books);
        })
        .catch((error) => {
            console.log("Error fetching books:", error); // Check if there's any error
            res.status(500).json({ error: "Could not fetch the doc" });
        });
});

app.get('/books/:id', (req,res) => {

    if(ObjectId.isValid(req.params.id)){
        db.collection("books")
          .findOne({ _id: new ObjectId(req.params.id) })
          .then((doc) => {
            res.status(200).json(doc);
          })
          .catch((err) => {
            res.status(500).json({ error: "Cant fetch the document" });
          });
    }
    else{
        res.status(500).json({err:'Not a valid id '})
    }    
})

app.post('/books', (req,res) => {
    const book = req.body

    db.collection('books')
        .insertOne(book)
        .then(result=> {
            res.status(201).json(result.ops[0]);
        })
        .catch(err =>{
            res.status(500).json({error :` Cant create a post request to the database ${err}`})
        })
})

