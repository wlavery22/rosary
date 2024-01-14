import './PrayerCard.css';
import { useState, useEffect } from 'react';

function PrayerCard({dailyPrayer, theme, date}) {

  return (
    <main className="prayer-card">
      {/* <p className="prayer">Give us this day our daily bread</p> */}
      <p className="dailyPrayer">{dailyPrayer}</p>
      <p className="theme">{theme}</p>
      <p className="date">{date}</p>
    </main>
    )
  }
  
  export default PrayerCard
  
