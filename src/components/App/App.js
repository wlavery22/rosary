import logo from '../../logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../HomePage/HomePage';
import PrayerPage from '../PrayerPage/PrayerPage';
import SelectPage from '../SelectPage/SelectPage';
import { getPrayers } from '../../apiCalls'
import PrayerCard from '../PrayerCard/PrayerCard';

function App() {
  const [prayer, setPrayer] = useState("");
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");

  window.addEventListener("load", (event) => {
    getPrayers();
  });

  const getPrayers = () => {
    fetch("https://the-rosary-api.vercel.app/v1/today")
    .then(response => response.json())
    .then(data => {
      setPrayer(data);
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
        <Route path="/" element={<HomePage />} />
        {/* <Route
          path="/select"
          element={<SelectPage />}
        /> */}
        <Route
          path="/prayercard"
          element={
            <PrayerCard 
              setPrayer={setPrayer}
              prayer={prayer} 
            />
          }
        />
        {/* <Route
          path="/prayer"
          element={
            <PrayerPage
              // questions={questions}
            />
          }
        /> */}
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