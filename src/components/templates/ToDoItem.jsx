import React from "react";

const ToDoItem = ({ task, handleChangeStatus, handleDelete }) => {
  const { id, data, done, date } = task;

  return (
    <div className="todo-item" id={id}>
      {done ? (
        <div className="todo-item__delete" onClick={handleDelete}>
          <button className="todo-item__delete--bin icon-bin"></button>
        </div>
      ) : (
        <div className="todo-item__date">
          <p className="todo-item__date--month">{date.month}</p>
          <p className="todo-item__date--day">{date.day}</p>
        </div>
      )}

      <h2 className={"todo-item__data" + (done ? " done" : "")}>{data}</h2>

      <div className="todo-item__done">
        {done ? (
          <p className="todo-item__done--checkbox icon-checkbox-checked"></p>
        ) : (
          <button
            className="todo-item__done--checkbox icon-checkbox-unchecked"
            onClick={handleChangeStatus}
          ></button>
        )}
      </div>
    </div>
  );
};

export default ToDoItem;
