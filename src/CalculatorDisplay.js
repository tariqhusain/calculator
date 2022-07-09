import React from 'react';
import './App.css';

export default function calculatorDisplay(props) {
    /*
    function setDisplay(key) {
        console.log(key);
        let displaySpan = document.getElementById("displaySpan");
        if (displaySpan) {
            displaySpan.innerHTML += key;
        }
    }
    */

    return (
        <div className="row" id="display">
            <div className="col" id="displaySpan">
                {props.display}
            </div>
        </div>
    )
}
