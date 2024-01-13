import './PrayerCard.css';
import { useState, useEffect } from 'react';

function PrayerCard({prayer}) {

  return (
    <main className="prayer-card">
      {/* <p className="prayer">Give us this day our daily bread</p> */}
      <p className="prayer">{prayer}</p>
    </main>
    )
  }
  
  export default PrayerCard