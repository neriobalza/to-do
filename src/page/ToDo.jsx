import React, { useState, useEffect } from "react";

import ToDoInput from "../components/templates/ToDoInput";
import ToDoList from "../components/templates/ToDoList";
import ToDoFilters from "../components/templates/ToDoFilters";

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState({
    filter: false,
    data: {
      type: "",
      value: "",
    },
  });

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const localTasks = JSON.parse(localStorage.getItem("tasks"));
      setTodoList([...localTasks]);
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, []);

  const handleInputTask = (task) => {
    let newList = todoList;
    newList.unshift(task);
    localStorage.setItem("tasks", JSON.stringify(newList));
    setTodoList([...newList]);
  };

  const handleSetNewList = (newTaskArray) => {
    localStorage.setItem("tasks", JSON.stringify(newTaskArray));
    setTodoList([...newTaskArray]);
  };

  const handleSetFilter = (fil) => {
    setFilter(fil);
  };

  return (
    <main className="todo">
      <ToDoInput save={handleInputTask} />
      <ToDoFilters setFilter={handleSetFilter} />
      <ToDoList list={todoList} save={handleSetNewList} filterData={filter} />
    </main>
  );
};

export default ToDo;
