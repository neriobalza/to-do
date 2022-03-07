import React from "react";

const ToDoInput = ({ save }) => {
  const handleSaveTask = (event) => {
    const monthList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dev",
    ];
    const date = new Date();
    const month = monthList[date.getMonth()];
    const day = date.getDate();
    const task = document.getElementById("task").value;
    const tag = document.getElementById("tag").value;
    const id =
      date.getDate() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getFullYear() +
      ":" +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    const taskObject = {
      id: id,
      date: {
        day: day,
        month: month,
      },
      data: task,
      tag: tag,
      done: false,
    };
    if (task) {
      save(taskObject);
      document.getElementById("input-tag").reset();
    }
  };
  return (
    <section className="todo-input">
      <label className="label" htmlFor="task">
        New Task <i className="icon-quill"></i>
      </label>

      <form className="input-tag" id="input-tag">
        <input
          className="input"
          type="text"
          maxLength="50"
          placeholder="Your task..."
          name="task"
          id="task"
        />
        <select className="tag" name="tag" id="tag">
          <option value="untaged" hidden>
            Tag
          </option>
          <option value="untaged">Untaged</option>
          <option value="home">Home</option>
          <option value="work">Wok</option>
          <option value="school">School</option>
        </select>
      </form>
      <button className="button" onClick={handleSaveTask}>
        Create Task
      </button>
    </section>
  );
};

export default ToDoInput;
