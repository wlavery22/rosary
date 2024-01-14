import './PrayerPage.css';
import PrayerCard from '../PrayerCard/PrayerCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function PrayerPage({theme, date}) {

  return (
    <main className="prayer-page">
      <PrayerCard theme={theme} date={date}/>
      <Link className="to-home-page" to="/">
        <button className="home-btn">Home</button>
      </Link>
    </main>
  )
}

export default PrayerPage