import { useState } from 'react';
import "./WeekDayMenu.css"
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const WeekDayMenu = ({ setWeekDay, setTheme }) => {
  const navigate = useNavigate();
  
  const handleDaySelection = (event) => {
    setWeekDay(event.target.value);
    setTheme("");
    navigate("/prayer");
  };

  return (
    <main className ="week-day-menu">
      <div class="input-field">
        <label className="day-label" htmlFor="week-day-dropdown">Select Day</label>
        <select id="day-dropdown" onChange={handleDaySelection}>
          <option value="">Make Selection</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div>
    </main>
  );
};

export default WeekDayMenu;