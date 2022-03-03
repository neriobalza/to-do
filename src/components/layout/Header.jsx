import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("Inicializando");
    if (localStorage.getItem("dark-mode")) {
      const darkOnLocal = JSON.parse(localStorage.getItem("dark-mode"));
      setDarkMode(darkOnLocal);
      if (darkOnLocal) {
        document.getElementById("dark-mode-button").classList.add("active");
        document.body.classList.add("dark");
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
    document.getElementById("dark-mode-button").classList.toggle("active");
    document.body.classList.toggle("dark");
    localStorage.setItem("dark-mode", !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <h1 className="header__title">ToDo</h1>

      <nav className="navbar" id="menu-navbar">
        <div
          id="dark-mode-button"
          className="dark-mode-button"
          onClick={handleDarkMode}
        >
          <div className="dark-mode-button__toggle"></div>
        </div>

        {/* <div className="users">
          <p className="users__title">User:</p>
          <p className="users__current">Nerio</p>
          <ul className="users__list">
            <li className="users__list--item">Nerio</li>
            <li className="users__list--item">Alejandra</li>
            <li className="users__list--item">Sol</li>
            <li className="users__list--item">Creater New User</li>
          </ul>
        </div> */}

        {/* <p>User</p>
        <ul className="navbar__list">
          <li className="navbar__list--item">About</li>
        </ul>

        <ul className="navbar__social-media">
          <li className="navbar__social-media--item"></li>
        </ul> */}
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
