import { useState } from 'react';
import "./ThemeMenu.css"

const ThemeMenu = ({ setTheme }) => {

  const handleThemeSelection = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div>
      <label className="theme-label" htmlFor="theme-dropdown">Select Theme</label>
      <select id="theme-dropdown" onChange={handleThemeSelection}>
        <option value="joyful">Joyful</option>
        <option value="glorious">Glorious</option>
        <option value="sorrowful">Sorrowful</option>
        <option value="luminous">Luminous</option>
      </select>
    </div>
  );
};

export default ThemeMenu;

