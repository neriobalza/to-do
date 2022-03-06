import React, { useState, useEffect } from "react";

import ToDoInput from "../components/templates/ToDoInput";
import ToDoList from "../components/templates/ToDoList";
import ToDoFilters from "../components/templates/ToDoFilters";

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);

  const handleInputTask = () => {
    setTodoList([...todoList]);
  };

  return (
    <main className="todo">
      <ToDoInput save={handleInputTask} />
      <ToDoFilters />
      <ToDoList list={todoList} />
    </main>
  );
};

export default ToDo;

// {
//   id: 0,
//   date: {
//     day: 25,
//     month: "Feb",
//   },
//   data: "Comprar mas verduras",
// },
