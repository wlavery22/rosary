import './SelectPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeMenu from '../ThemeMenu/ThemeMenu.js';
import WeekDayMenu from '../DateMenu/DateMenu.js';

function SelectPage({ setTheme, setDate, setPrayer }) {

  return (
    <main className="select-page">
      <h3>Choose A Prayer By Theme Or Date</h3>
      <div className="choose-theme-menu">
        <ThemeMenu className="select-theme" setPrayer={setPrayer} setTheme={setTheme} setDate={setDate}/>
        <br></br>
        <br></br>
        <WeekDayMenu className="select-day" setPrayer={setPrayer} setDate={setDate} setTheme={setTheme}/>
        {/* <Link className="to-prayer-page" to="/prayer">
          <button className="theme-btn">Submit Theme</button>
        </Link> */}
      </div>
    </main>
  )
}

export default SelectPage;


