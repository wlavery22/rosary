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
      {/* <div class="input-field">
        <label className="day-label" htmlFor="week-day-dropdown">Select Day</label>
        <select id="day-dropdown" onChange={handleDateSelection}>
          <option value="">Make Selection</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div> */}
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

