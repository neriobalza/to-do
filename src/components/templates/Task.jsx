import React from "react";

const Task = ({ task, onClick, done }) => {
  const { id, data, date, tag } = task;

  return (
    <div className="task" id={id}>
      {done ? (
        <div className="task__delete">
          <button
            className="task__delete--bin icon-bin"
            onClick={onClick}
          ></button>
        </div>
      ) : (
        <div className="task__date">
          <p className="task__date--month">{date.month}</p>
          <p className="task__date--day">{date.day}</p>
        </div>
      )}

      <h2 className={"task__data" + (done ? " done" : "")}>
        <i className={`task__data--icon icon-${tag}`}></i>
        {data}
      </h2>

      <div className="task__done">
        {done ? (
          <p className="task__done--checkbox icon-checkbox-checked"></p>
        ) : (
          <button
            className="task__done--checkbox icon-checkbox-unchecked"
            onClick={onClick}
          ></button>
        )}
      </div>
    </div>
  );
};

export default Task;
