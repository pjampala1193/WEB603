import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Lists() {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5001/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error loading books:", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/books/${id}`);
      loadBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="border border-primary p-4">
      <Link to="/create" className="btn btn-primary mb-4">
        Add Book
      </Link>

      <h2 className="mb-4">Book List</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Link
                    to={`/edit/${book._id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => deleteBook(book._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No books found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Lists;