import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("dark-mode")) {
      const darkOnLocal = JSON.parse(localStorage.getItem("dark-mode"));
      setDarkMode(darkOnLocal);
      if (darkOnLocal) {
        document.body.classList.add("dark");
        document.getElementById("dark-mode-button").classList.add("active");
      }
    } else {
      localStorage.setItem("dark-mode", darkMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenMenu = () => {
    document.getElementById("menu-btn").classList.toggle("active");
    document.getElementById("menu-navbar").classList.toggle("active");
  };

  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
    document.getElementById("dark-mode-button").classList.toggle("active");
    localStorage.setItem("dark-mode", !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <h1 className="header__title">ToDo</h1>

      <nav className="navbar" id="menu-navbar">
        <button className="info-button">?</button>

        <div
          id="dark-mode-button"
          className="dark-mode-button"
          onClick={handleDarkMode}
        >
          <div className="dark-mode-button__toggle"></div>
        </div>

        <div id="users" className="users">
          <p className="users__current">No Users</p>
          <ul className="users__list">
            {/* <li className="users__list--item">Nerio</li> */}
            <li className="users__list--item">Creater user</li>
          </ul>
        </div>

        <ul className="social-media">
          <li className="social-media__link">
            <a href="/">
              <i></i>
            </a>
          </li>
        </ul>
      </nav>

      <div id="menu-btn" className="header__button" onClick={handleOpenMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
