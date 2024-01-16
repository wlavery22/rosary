import { useState } from 'react';
import "./DateMenu.css"
import { useNavigate } from 'react-router-dom';

const DateMenu = ({ setDate, setTheme, setPrayer }) => {
  const navigate = useNavigate();

  const handleDateSelection = (event) => {
    setDate(event.target.value);
    setTheme("");
    navigate("/prayer");
  };

  return (
    <main className ="date-menu">
      <form>
        <label for="date" className="date-label">Date:</label> 
          <input type="date" name="date" id="date" required onChange={handleDateSelection}/>
      </form>
    </main>
  );
};

export default DateMenu;

