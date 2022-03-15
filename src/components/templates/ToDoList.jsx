import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ list, save, filterData }) => {
  const { filter, data } = filterData;

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
      {!filter
        ? list.map((task) => {
            return (
              <ToDoItem
                task={task}
                key={task.id}
                handleChangeStatus={handleChangeStatus}
                handleDelete={handleDelete}
              />
            );
          })
        : list
            .filter((task) => {
              if (data.type === "done") {
                return task.done === data.value;
              } else {
                return task.tag === data.value;
              }
            })
            .map((task) => {
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
