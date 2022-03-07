import React, { useState } from "react";

import ToDoInput from "../components/templates/ToDoInput";
import ToDoList from "../components/templates/ToDoList";
import ToDoFilters from "../components/templates/ToDoFilters";

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);

  const handleInputTask = (task) => {
    let newList = todoList;
    newList.unshift(task);
    setTodoList([...newList]);
  };

  const handleSetNewList = (newTaskArray) => {
    setTodoList([...newTaskArray]);
  };

  return (
    <main className="todo">
      <ToDoInput save={handleInputTask} />
      <ToDoFilters />
      <ToDoList list={todoList} save={handleSetNewList} />
    </main>
  );
};

export default ToDo;
