import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function CreateList() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const saveBook = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/books", {
        title,
        author,
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  return (
    <div className="border border-primary p-4">
      <h2 className="mb-4">Add Book</h2>

      <form onSubmit={saveBook}>
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

export default CreateList;