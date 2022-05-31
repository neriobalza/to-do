import React from "react";
import Task from "./Task";

const TasksList = ({ tasksList, onClick, filter, done }) => {
  return (
    <section className="tasks-list">
      {tasksList
        .filter((task) => {
          if (!filter) return task;
          return filter === task.tag;
        })
        .map((task) => {
          return (
            <Task
              task={task}
              onClick={onClick}
              key={task.id}
              done={done ? true : false}
            />
          );
        })}
    </section>
  );
};

export default TasksList;
