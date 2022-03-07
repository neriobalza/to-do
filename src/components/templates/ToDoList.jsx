import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ list, save }) => {
  const handleChangeStatus = (event) => {
    const id = event.target.parentNode.parentNode.id;
    let taskDone = list.find((taskE) => {
      return taskE.id === id;
    });
    taskDone.done = true;
    let newArray = list.filter((taskE) => {
      return taskE.id !== id;
    });
    newArray.push(taskDone);
    console.log(newArray);
    save(newArray);
  };

  const handleDelete = (event) => {
    const id = event.target.parentNode.parentNode.id;
    const newArray = list.filter((taskE) => {
      return taskE.id !== id;
    });
    save(newArray);
  };

  return (
    <section className="todo-list">
      {list.map((task) => {
        return (
          <ToDoItem
            task={task}
            key={task.id}
            handleChangeStatus={handleChangeStatus}
            handleDelete={handleDelete}
          />
        );
      })}
    </section>
  );
};

export default ToDoList;
