
import './App.css';
import React, { useState } from "react";

function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState('');

  const Bmical = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter the height and weight in fileds ");
    }
    else {
      var bmi = (weight / (height * height) * 703);
      setbmi(bmi.toFixed(1));
      if (bmi < 25) {
        setmessage("You are underweight...");
      }
      else if (bmi > 25 && bmi < 30) {
        setmessage("You are  healthy");
      }
      else {
        setmessage("you are overweight");
      }

    }

  }
  const reload = () => {
    window.location.reload();
  }
  return (
    <div className="App">
      <div className='container'>
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={Bmical}>
          < div >
            <label> weight (ibs)</label>
            <input type='text' value={weight} onChange={(e) => setweight(e.target.value)} />
          </div>
          <div>
            <label> height (in)</label>
            <input type='text' value={height} onChange={(e) => setheight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type='submit'>Submit</button>
            <button className="btn btn-outline" onClick={reload} type='submit' > Reload</button>
          </div>
          <div className='center'>
            <h1>your BMI is : {bmi}</h1>
            <p>{message}</p>
          </div>
        </form>
      </div >

    </div >
  );
}

export default App;
