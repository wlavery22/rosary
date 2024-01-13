import './HomePage.css';
import PrayerCard from '../PrayerCard/PrayerCard';

function HomePage({prayer}) {
  

return (
  <main className="home-page">
    <h1 className="title">Welcome to Daily Prayer App</h1>
    <PrayerCard prayer={prayer} />
   
  </main>
)
}

export default HomePage