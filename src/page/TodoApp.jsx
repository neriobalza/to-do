import React, { useState, useEffect } from "react";

import TaskInput from "../components/templates/TaskInput";
import TasksFilter from "../components/templates/TasksFilter";
import TasksList from "../components/templates/TasksList";

const TodoApp = () => {
  const LSTodokey = "todo-tasks";
  const LSDoneKey = "done-tasks";
  const [todoTasks, setTodoTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [filter, setFilter] = useState("");

  // Create a new task...
  const handleCreateTask = (task) => {
    let newTodoList = todoTasks;
    newTodoList.unshift(task);
    localStorage.setItem(LSTodokey, JSON.stringify(newTodoList));
    setTodoTasks([...newTodoList]);
  };

  // Set a selected task as done...
  const handleDoneTask = (event) => {
    const id = event.target.parentNode.parentNode.id;
    const task = todoTasks.find((taskObj) => taskObj.id === id);
    const newTodoList = todoTasks.filter((taskObj) => taskObj.id !== id);
    const newDoneList = doneTasks;
    newDoneList.unshift(task);
    localStorage.setItem(LSTodokey, JSON.stringify(newTodoList));
    setTodoTasks([...newTodoList]);
    localStorage.setItem(LSDoneKey, JSON.stringify(newDoneList));
    setDoneTasks([...newDoneList]);
  };

  // Delete a selected task...
  const handleDeleteTask = (event) => {
    const id = event.target.parentNode.parentNode.id;
    const newDoneList = doneTasks.filter((taskObj) => taskObj.id !== id);
    localStorage.setItem(LSDoneKey, JSON.stringify(newDoneList));
    setDoneTasks([...newDoneList]);
  };

  const handleSetFilter = (newFilter) => {
    switch (newFilter) {
      case "all":
        setFilter("");
        break;

      default:
        setFilter(newFilter);
        break;
    }
  };

  // Getting Todo and Done tasks from the localstorage...
  const getTasksFromLocalStorage = () => {
    if (localStorage.getItem(LSTodokey)) {
      const todoLocalTasks = JSON.parse(localStorage.getItem(LSTodokey));
      const doneLocalTasks = JSON.parse(localStorage.getItem(LSDoneKey));
      setTodoTasks([...todoLocalTasks]);
      setDoneTasks([...doneLocalTasks]);
    } else {
      localStorage.setItem(LSTodokey, JSON.stringify([]));
      localStorage.setItem(LSDoneKey, JSON.stringify([]));
    }
  };

  // Initial Use Effect
  useEffect(() => {
    getTasksFromLocalStorage();
  }, []);

  return (
    <main className="todo">
      <TaskInput save={handleCreateTask} />

      <TasksFilter
        setFilter={handleSetFilter}
        filter={filter}
        todo={todoTasks}
        done={doneTasks}
      />

      {todoTasks.length > 0 && (
        <TasksList
          tasksList={todoTasks}
          onClick={handleDoneTask}
          filter={filter}
        />
      )}

      {doneTasks.length > 0 && (
        <TasksList
          tasksList={doneTasks}
          onClick={handleDeleteTask}
          filter={filter}
          done
        />
      )}
    </main>
  );
};

export default TodoApp;
