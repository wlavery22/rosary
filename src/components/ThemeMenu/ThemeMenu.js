import { useState } from 'react';
import "./ThemeMenu.css"
import { useNavigate } from 'react-router-dom';

const ThemeMenu = ({ setTheme, setDate, setPrayer }) => {
  const navigate = useNavigate();

  const handleThemeSelection = (event) => {
    setTheme(event.target.value);
    setDate("");
    navigate("/prayer");
  };

  return (
    <main className ="theme-menu">
      <div class="input-field">
        <label className="theme-label" htmlFor="theme-dropdown">Select Theme</label>
        <select id="theme-dropdown" onChange={handleThemeSelection}>
          <option value="">Make Selection</option>
          <option value="joyful">Joyful</option>
          <option value="glorious">Glorious</option>
          <option value="sorrowful">Sorrowful</option>
          <option value="luminous">Luminous</option>
        </select>
      </div>
    </main>
  );
};

export default ThemeMenu;

