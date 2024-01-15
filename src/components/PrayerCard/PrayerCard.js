import './PrayerCard.css';
import { useState, useEffect } from 'react';

function PrayerCard({prayer}) {

  return (
    <main className="prayer-card">
      {/* <p className="prayer">Give us this day our daily bread</p> */}
      <a href={prayer} target="_blank" rel="noopener noreferrer">Click here to pray</a>

      <p className="prayer">{prayer}</p>
    </main>
    )
  }
  
  export default PrayerCard
  
