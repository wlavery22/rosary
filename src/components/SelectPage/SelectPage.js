import './SelectPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeMenu from '../ThemeMenu/ThemeMenu.js';
import WeekDayMenu from '../WeekDayMenu/WeekDayMenu.js';

function SelectPage({ setTheme, setWeekDay }) {

  return (
    <main className="select-page">
      <h3>Choose A Prayer By Theme Or Day Of The Week</h3>
      <div className="choose-theme-menu">
        <ThemeMenu className="select-theme" setTheme={setTheme} setWeekDay={setWeekDay}/>
        <WeekDayMenu className="select-day" setWeekDay={setWeekDay} setTheme={setTheme}/>
        {/* <Link className="to-prayer-page" to="/prayer">
          <button className="theme-btn">Submit Theme</button>
        </Link> */}
      </div>
    </main>
  )
}

export default SelectPage;


