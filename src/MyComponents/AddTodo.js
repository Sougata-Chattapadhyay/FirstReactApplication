import { getByTitle } from "@testing-library/react";
import React, { useState } from "react";
export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    if (!title || !desc) {
      alert("Title and Description Can not be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <form>
        <div className="form-group mt-2">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => submit(e)}
          className="btn btn-sm btn-success mt-2"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
