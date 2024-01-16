import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../HomePage/HomePage';
import PrayerPage from '../PrayerPage/PrayerPage';
import SelectPage from '../SelectPage/SelectPage';
import ThemeMenu from '../ThemeMenu/ThemeMenu.js';
import DateMenu from '../DateMenu/DateMenu.js';
import PrayerCard from '../PrayerCard/PrayerCard';
import { formatDate, getRandomElement } from '../../utils.js'

function App() {
  const [dailyPrayer, setDailyPrayer] = useState("");
  const [theme, setTheme] = useState("");
  const [date, setDate] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    if (theme) {
      getThemePrayer(theme);
    } else if (date) {
      console.log("DATE!!!:", date)
      getDatePrayer(`date/${formatDate(date)}`)
    } else {
      getPrayer("today");
    }
    // setPrayer(data[0].mp3Link);
  }, [theme, date]);

  useEffect(() => {
    getDailyPrayer("today");
  }, []) 

  const getThemePrayer = (selection) => {
    console.log("HEY", selection)
    fetch(`https://the-rosary-api.vercel.app/v1/${selection}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPrayer(getRandomElement(data).text);
    })
    .catch(err => console.error(err));
  }

  const getDatePrayer = (selection) => {
    console.log("HEY", selection)
    fetch(`https://the-rosary-api.vercel.app/v1/${selection}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPrayer(`https://dailyrosary.cf/${data.mp3Link}`);
      // setPrayer(`${https://dailyrosary.cf/}${data[0].mp3Link}`);

    })
    .catch(err => console.error(err));
  }

  const getPrayer = (selection) => {
    fetch(`https://the-rosary-api.vercel.app/v1/${selection}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // setPrayer(data[0].mp3Link);
      setPrayer(`https://dailyrosary.cf/${data[0].mp3Link}`);
    })
    .catch(err => console.error(err));
  }

  const getDailyPrayer = (selection) => {
    fetch(`https://the-rosary-api.vercel.app/v1/${selection}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setDailyPrayer(`https://dailyrosary.cf/${data[0].mp3Link}`);
    })
    .catch(err => console.error(err));
  }

  console.log(theme, date)

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
              setPrayer={setPrayer}
            />
          }
        />
        <Route
          path="/prayer"
          element={
            <PrayerPage 
              prayer={prayer} 
              theme={theme}
            />
          }
        />
        <Route path="/*" element={<ErrorPage />} />
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

  