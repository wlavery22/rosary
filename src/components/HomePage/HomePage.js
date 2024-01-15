import './HomePage.css';
import PrayerCard from '../PrayerCard/PrayerCard';
import { Link } from 'react-router-dom';

function HomePage({dailyPrayer}) {
  

return (
  <main className="home-page">
    <h1 className="title">Welcome to Daily Prayer App</h1>
    <PrayerCard prayer={dailyPrayer} />
    {/* <PrayerCard prayer={prayer} /> */}
    <Link to="/select">
      <button className="select-prayer">Select Prayer</button>
    </Link>
  </main>
)
}

export default HomePage