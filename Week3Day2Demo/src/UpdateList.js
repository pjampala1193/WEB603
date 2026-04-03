import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

function UpdateList() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBookById();
  }, []);

  const getBookById = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/books/${id}`);
      setTitle(response.data.title);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  const updateBook = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5001/books/${id}`, {
        title,
        author,
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="border border-primary p-4">
      <h2 className="mb-4">Edit Book</h2>

      <form onSubmit={updateBook}>
        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Save
        </button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default UpdateList;