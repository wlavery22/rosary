import { useState } from 'react';
import "./ThemeMenu.css"
import { Link } from 'react-router-dom';

const ThemeMenu = ({ setTheme }) => {

  const handleThemeSelection = (event) => {
    setTheme(event.target.value);
  };

  return (
    <main className ="theme-menu">
      <div class="input-field">
        <label className="theme-label" htmlFor="theme-dropdown">Select Theme</label>
        <select id="theme-dropdown" onChange={handleThemeSelection}>
          <option value="joyful">Joyful</option>
          <option value="glorious">Glorious</option>
          <option value="sorrowful">Sorrowful</option>
          <option value="luminous">Luminous</option>
        </select>
        <Link className="to-prayer-page" to="/prayer">
          <button className="theme-btn">Submit Theme</button>
        </Link>
      </div>
    </main>
  );
};

export default ThemeMenu;

