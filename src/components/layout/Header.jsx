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

  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
    document.getElementById("dark-mode-button").classList.toggle("active");
    localStorage.setItem("dark-mode", !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <h1 className="header__title">ToDo</h1>

      <div className="header__buttons" id="menu-navbar">
        <button
          id="dark-mode-button"
          className="dark-mode-button"
          onClick={handleDarkMode}
        >
          <div className="dark-mode-button__icon">🌜</div>
          <div className="dark-mode-button__icon">🌞</div>
          <div className="dark-mode-button__toggle"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
