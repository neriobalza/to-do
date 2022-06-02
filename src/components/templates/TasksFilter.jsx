import React from "react";

const TasksFilter = () => {
  const handleShowFilters = () => {
    document.getElementById("filters").classList.toggle("active");
  };

  return (
    <section className="tasks-filter">
      <h3 className="tasks-filter__header">
        <span onClick={handleShowFilters}>Filter</span>
        <span onClick={handleShowFilters}>All (0)</span>
      </h3>

      <ul className="tasks-filter__list" id="filters">
        <li>Untaged</li>
        <li>Home</li>
        <li>Work</li>
        <li>School</li>
      </ul>
    </section>
  );
};

export default TasksFilter;

// import React, { useState } from "react";

// const TasksFilter = ({ setFilter }) => {
//   const [filterToShow, setFilterToShow] = useState("all");
//   const filters = [
//     { id: "done", type: "done", value: true },
//     { id: "undone", type: "done", value: false },
//     { id: "untaged", type: "tag", value: "untaged" },
//     { id: "home", type: "tag", value: "home" },
//     { id: "work", type: "tag", value: "work" },
//     { id: "school", type: "tag", value: "school" },
//   ];

//   const handleToggleFilters = () => {
//     document.getElementById("filters").classList.toggle("active");
//   };

//   const handleSelectFilter = (event) => {
//     const id = event.target.id;
//     const filterData = filters.find((fil) => {
//       return fil.id === id;
//     });
//     const filObj = {
//       filter: true,
//       data: {
//         type: filterData.type,
//         value: filterData.value,
//       },
//     };
//     setFilterToShow(id);
//     setFilter(filObj);
//     handleToggleFilters();
//   };

//   const handleQuitFilter = () => {
//     const filObj = {
//       filter: false,
//       data: {
//         type: "",
//         value: "",
//       },
//     };
//     setFilterToShow("all");
//     setFilter(filObj);
//     handleToggleFilters();
//   };

//   return (
//     <section className="todo-filters">
//       <div className="todo-filters__header">
//         <h2 className="todo-filters__header--current">{filterToShow}</h2>
//         <button
//           onClick={handleToggleFilters}
//           className="todo-filters__header--button"
//         >
//           Filters
//         </button>
//       </div>

//       <ul id="filters" className="todo-filters__list">
//         <li onClick={handleQuitFilter}>All</li>

//         {filters.map((fil) => {
//           return (
//             <li key={fil.id} id={fil.id} onClick={handleSelectFilter}>
//               {fil.id}
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

// export default TasksFilter;
