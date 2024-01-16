import { useState } from 'react';
import "./DateMenu.css"
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DateMenu = ({ setDate, setTheme, setPrayer }) => {
  const navigate = useNavigate();

  const handleDateSelection = (event) => {
    setDate(event.target.value);
    setTheme("");
    navigate("/prayer");
    // console.log("DATE:", date)
  };

  return (
    <main className ="date-menu">
      <form>
        <label for="date" className="date-label">Date:</label> 
        {/* <select id="date-select"></select> */}
          <input type="date" name="date" id="date" required onChange={handleDateSelection}/>
        {/* <br></br>
        <button type="button" id="date-submit-button" class="date-submit-button">Submit</button>*/}
      </form>
    </main>
  );
};

export default DateMenu;

