import './PrayerCard.css';
import { useState, useEffect } from 'react';

function PrayerCard({dailyPrayer}) {

  return (
    <main className="prayer-card">
      {/* <p className="prayer">Give us this day our daily bread</p> */}
      <p className="dailyPrayer">{dailyPrayer}</p>
    </main>
    )
  }
  
  export default PrayerCard