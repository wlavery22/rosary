// import logo from '../../logo.svg';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../HomePage/HomePage';
import PrayerPage from '../PrayerPage/PrayerPage';
import SelectPage from '../SelectPage/SelectPage';
import ThemeMenu from '../ThemeMenu/ThemeMenu.js';
import WeekDayMenu from '../DateMenu/DateMenu.js';
import PrayerCard from '../PrayerCard/PrayerCard';
// import { getPrayers } from '../../apiCall';

function App() {
  const [dailyPrayer, setDailyPrayer] = useState("");
  const [theme, setTheme] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (theme) {
      getThemePrayer(theme);
    } else if (date) {
      getDatePrayer(date)
    } else {
      getDailyPrayer("today");
    }
    // setPrayer(data[0].mp3Link);
  }, []);

  // if (isPacked) {
  //   return <li className="item">{name} ✔</li>;
  // }
  // return <li className="item">{name}</li>;

  const getThemePrayer = (selection) => {
    fetch(`https://the-rosary-api.vercel.app/v1/${selection}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setTheme(data[0].text);
    })
    .catch(err => console.error(err));
  }

  const getDatePrayer = (selection) => {
    fetch(`https://the-rosary-api.vercel.app/v1/${selection}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setDate(data[0].mp3Link);
    })
    .catch(err => console.error(err));
  }

  const getDailyPrayer = (selection) => {
    fetch(`https://the-rosary-api.vercel.app/v1/${selection}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setDailyPrayer(data[0].mp3Link);
    })
    .catch(err => console.error(err));
  }

  console.log(theme, date, dailyPrayer)
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<HomePage dailyPrayer={dailyPrayer} />} />
        <Route
          path="/select"
          element={
            <SelectPage 
              setTheme={setTheme} 
              setDate={setDate}
            />
          }
        />
        <Route
          path="/prayer"
          element={
            <PrayerPage
              // questions={questions}
            />
          }
        />
        {/* <Route path="/*" element={<ErrorPage />} /> */}
                {/* <Route
          path="/prayercard"
          element={
            <PrayerCard 
              prayer={prayer} 
            />
          }
        /> */}
      </Routes>
    </main>
  );
}

export default App;

  // const dayPrayers = async () => {
  //   try {
  //     const dayData = await getDayPrayers(day);
  //     setWeekDay(dayData);
  //   } catch (error) {
  //     console.error('ERROR:', error);
  //   }
  // }

  // const getDayPrayers = (day) => {
  //   fetch(`https://the-rosary-api.vercel.app/v1/${day}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setPrayer(data[0].text);
  //   })
  //   .catch(err => console.error(err));
  // }

/* <img src={logo} className="App-logo" alt="logo" />
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
</a> */
