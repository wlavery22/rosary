import './PrayerPage.css';
import PrayerCard from '../PrayerCard/PrayerCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function PrayerPage({prayer, theme}) {

  return (
    <main className="prayer-page">
      <PrayerCard prayer={prayer} theme={theme}/>
      <Link className="to-home-page" to="/">
        <button className="home-btn">Home</button>
      </Link>
    </main>
  )
}

export default PrayerPage