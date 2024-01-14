import './SelectPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeMenu from '../ThemeMenu/ThemeMenu.js';
import WeekDayMenu from '../DateMenu/DateMenu.js';

function SelectPage({ setTheme, setDate }) {

  return (
    <main className="select-page">
      <h3>Choose A Prayer By Theme Or Date</h3>
      <div className="choose-theme-menu">
        <ThemeMenu className="select-theme" setTheme={setTheme} setDate={setDate}/>
        <WeekDayMenu className="select-day" setDate={setDate} setTheme={setTheme}/>
        {/* <Link className="to-prayer-page" to="/prayer">
          <button className="theme-btn">Submit Theme</button>
        </Link> */}
      </div>
    </main>
  )
}

export default SelectPage;


