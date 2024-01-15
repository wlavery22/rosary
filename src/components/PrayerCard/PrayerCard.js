import './PrayerCard.css';
import { useState, useEffect } from 'react';

function PrayerCard({prayer, theme}) {

  return (
    <main className="prayer-card">
      {theme ? <p className="prayer">{prayer}</p> : 
      <a href={prayer} target="_blank" rel="noopener noreferrer">Click here to pray</a>}
    </main>
    )
  }
  
  export default PrayerCard
  
