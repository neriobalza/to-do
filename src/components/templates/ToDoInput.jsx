import React from "react";

const ToDoInput = () => {
  const handleInput = (event) => {};
  return (
    <section className="todo-input">
      <label className="label" htmlFor="task">
        New Task
      </label>

      <div className="input-tag">
        <input
          onInput={handleInput}
          className="input"
          type="text"
          maxLength="50"
          placeholder="Your task..."
          name="task"
          id="task"
        />
        <select className="tag" name="tag" id="tag">
          <option value="untaged" selected disabled hidden>
            Tag
          </option>
          <option value="">Home</option>
          <option value="">Wok</option>
          <option value="">School</option>
        </select>
      </div>
      <button className="button">Create Task</button>
    </section>
  );
};

export default ToDoInput;
