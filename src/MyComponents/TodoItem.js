import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <div className="row m-3">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-1">{todo.sno}</div>
              <div className="col-md-4">{todo.title}</div>
              <div className="col-md-7">{todo.des}</div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <button
              className="btn-sm btn-danger"
              onClick={() => {
                onDelete(todo);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <hr/>
    </>
  );
};
