import logo from './logo.svg';
import './App.css';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKeypad from './CalculatorKeypad';
import React, { useState } from "react";

/*
React components calculatorApp, calculatorDisplay, calculatorKeypad
ACTION
define Button component and render it through a loop
*/

function App() {
  let [calc, setCalc] = useState({
    keypressed: "",
    display: ""
  });

  let handleClick = (e) => {
    // console.log(e.target.id);
    let currKey = e.target.id;
    
    if (currKey === "AC") {
      setCalc({
        keypressed: currKey,
        display: ""
      })
    } else if (calc.keypressed === "=") {
      setCalc({
        keypressed: "",
        display: currKey
      })
    } else {
      if (currKey === "=") {
        setCalc({
          keypressed: currKey,
          display: eval(calc.display)
        })
      } else if (currKey === "%") {
        setCalc({
          keypressed: currKey,
          display: calc.display/100
        })
      } else if (currKey === "+/-") {
        if (calc.display[0] !== "-") {
          setCalc({
            keypressed: currKey,
            display: "-" + calc.display
          })
        } else {
          setCalc({
            keypressed: currKey,
            display: calc.display.substring(1)
          })
        }
      } else {
        setCalc({
          keypressed: currKey,
          display: calc.display + currKey
        });
      }
    }
  }

  return (
    <div>
      <div className="container" id="calculator">
        <CalculatorDisplay currKeyPressed = {calc.keypressed} display = {calc.display}/>
        <CalculatorKeypad onClick={(e) => handleClick(e)}/>
      </div>
    </div>
  );
}

export default App;
