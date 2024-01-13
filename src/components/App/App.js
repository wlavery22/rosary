// import logo from '../../logo.svg';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../HomePage/HomePage';
import PrayerPage from '../PrayerPage/PrayerPage';
import SelectPage from '../SelectPage/SelectPage';
import ThemeMenu from '../ThemeMenu/ThemeMenu.js';
import WeekDayMenu from '../WeekDayMenu/WeekDayMenu.js';
import PrayerCard from '../PrayerCard/PrayerCard';
// import { getPrayers } from '../../apiCall';

function App() {
  const [prayer, setPrayer] = useState("");
  const [theme, setTheme] = useState("");
  const [day, setWeekDay] = useState("");
  

  window.addEventListener("load", (event) => {
    getPrayers("today");
    setPrayer(data[0].mp3Link);
  });

  const getPrayers = (selection) => {
    fetch(`https://the-rosary-api.vercel.app/v1/${selection}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPrayer(data[0].mp3Link);
    })
    .catch(err => console.error(err));
}

// /v1/day
  // useEffect(() => {
  //   getPrayers();
  // }, "");

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<HomePage prayer={prayer} />} />
        <Route
          path="/select"
          element={
            <SelectPage 
              setTheme={setTheme} 
              setWeekDay={setWeekDay}
            />
          }
        />
        {/* <Route
          path="/prayercard"
          element={
            <PrayerCard 
              prayer={prayer} 
            />
          }
        /> */}
        <Route
          path="/prayer"
          element={
            <PrayerPage
              // questions={questions}
            />
          }
        />
        {/* <Route path="/*" element={<ErrorPage />} /> */}
      </Routes>
    </main>
  );
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}