import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <main className="error-page-container">
      <h1 className="error-message">You have reached this page in error, please go back.</h1>
      <br></br>
      <Link to="/">
        <button className="return-to-home-btn">Return to Home</button>
      </Link>
    </main>
  );
};

export default ErrorPage;