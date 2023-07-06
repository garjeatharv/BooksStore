# BooksStore

The BookStore API is a Node.js application built with Express and MongoDB. It provides a RESTful API to manage books in a bookstore. With this API, you can perform CRUD (Create, Read, Update, Delete) operations on book records, including fetching all books, fetching a book by ID, and creating a new book.

## Features:
- Retrieve all books from the bookstore
- Fetch a book by its unique ID
- Add a new book to the bookstore

## Project Structure:
- `app.js`: The main entry point of the application where the Express server is initialized and API endpoints are defined.
- `db.js`: A module responsible for establishing a connection to the MongoDB database and providing a reference to the database object.

## Usage:
1. Install dependencies: Run `npm install` to install the required dependencies.
2. Start the server: Run `npm start` to start the server on port 8000.
3. Access the API: Use your preferred API testing tool (e.g., cURL, Postman) to interact with the available endpoints.

## API Endpoints:
- GET `/books`: Retrieve all books from the bookstore.
- GET `/books/:id`: Fetch a book by its unique ID.
- POST `/books`: Add a new book to the bookstore.

## Database Connection:
The application connects to a MongoDB database using the MongoDB Node.js driver. The connection details are configured in the `db.js` module.

## Dependencies:
- express: Fast and minimalist web framework for Node.js
- mongodb: Official MongoDB driver for Node.js

## Contributing:
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please submit an issue or a pull request on GitHub.
