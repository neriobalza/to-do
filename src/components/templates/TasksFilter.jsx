import React from "react";

const TasksFilter = ({ setFilter, filter, todo = [], done = [] }) => {
  const handleShowFilters = () => {
    document.getElementById("filters").classList.toggle("active");
  };

  const handleSetFilter = (event) => {
    const filter = event.target.innerHTML.toLowerCase();
    setFilter(filter);
    document.getElementById("filters").classList.remove("active");
  };

  return (
    <section className="tasks-filter">
      <h3 className="tasks-filter__header">
        <span onClick={handleShowFilters}>Filter</span>
        <span onClick={handleShowFilters}>
          {filter ? filter : "All"} (
          {filter
            ? todo.filter((task) => task.tag === filter).length +
              done.filter((task) => task.tag === filter).length
            : todo.length + done.length}
          )
        </span>
      </h3>

      <ul className="tasks-filter__list" id="filters">
        <li onClick={handleSetFilter}>All</li>
        <li onClick={handleSetFilter}>Untaged</li>
        <li onClick={handleSetFilter}>Home</li>
        <li onClick={handleSetFilter}>Work</li>
        <li onClick={handleSetFilter}>School</li>
      </ul>
    </section>
  );
};

export default TasksFilter;
