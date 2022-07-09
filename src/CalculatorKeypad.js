import React from 'react'
import './App.css';

export default function calculatorKeypad(props) {
    const keyPad = [{ rownum: 1, rowkeys: ["AC", "+/-", "%", "/"] }, { rownum: 2, rowkeys: ["7", "8", "9", "*"] }, { rownum: 3, rowkeys: ["4", "5", "6", "-"] }, { rownum: 4, rowkeys: ["1", "2", "3", "+"] }, { rownum: 5, rowkeys: ["0", ".", "="] }];
    return (
        <div className="row" id="keypad" key="keypad">
            {keyPad.map((keys) => { // whenever using map function or generating multiple components dynamically via a loop then we need provide a key property so that React can different between multiple similar components. When we have static component React automatically adds a key.
                return (
                    <div id={"row-" + keys.rownum} key={"row-" + keys.rownum} className="row">
                        {keys.rowkeys.map((key) => {
                            return (
                                <div className="col" key={keys.rownum + key}><button type="button" className="w-100 btn btn-primary" id={key} key={key} onClick={props.onClick}>{key}</button></div>
                            )
                        }
                        )}
                    </div>
                )
            })}
        </div>
    )
}

/*
export default function calculatorKeypad(props) {
    return (
        <div>
            <div className="row" id="keypad">
                <div className="row" id="keypad-row1">
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="MC" onClick={props.onClick}>MC</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="MR" onClick={props.onClick}>MR</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="M+" onClick={props.onClick}>M+</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="M" onClick={props.onClick}>M-</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="CE" onClick={props.onClick}>CE</button></div>
                </div>
                <div className="row" id="keypad-row2">
                    <div className="col"><button type="button" className="w-100 btn btn-light" id="7" onClick={props.onClick}>7</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-light" id="8" onClick={props.onClick}>8</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn btn-light" id="9" onClick={props.onClick}>9</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="/" onClick={props.onClick}>/</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="sqrt" onClick={props.onClick}>sqrt</button></div>
                </div>
                <div className="row" id="keypad-row3">
                    <div className="col"><button type="button" className="w-100 btn btn btn-light" id="4" onClick={props.onClick}>4</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn btn-light" id="5" onClick={props.onClick}>5</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn btn-light" id="6" onClick={props.onClick}>6</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="*" onClick={props.onClick}>*</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="percent" onClick={props.onClick}>%</button></div>
                </div>
                <div className="row" id="keypad-row4">
                    <div className="col"><button type="button" className="w-100 btn btn btn-light" id="1" onClick={props.onClick}>1</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn btn-light" id="2" onClick={props.onClick}>2</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn btn-light" id="3" onClick={props.onClick}>3</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="minus" onClick={props.onClick}>-</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="1byx" onClick={props.onClick}>1/x</button></div>
                </div>
                <div className="row" id="keypad-row5">
                    <div className="col"><button type="button" className="w-100 btn btn btn-light" id="0" onClick={props.onClick}>0</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="." onClick={props.onClick}>.</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="+/-" onClick={props.onClick}>+/-</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="+" onClick={props.onClick}>+</button></div>
                    <div className="col"><button type="button" className="w-100 btn btn-primary" id="=" onClick={props.onClick}>=</button></div>
                </div>
            </div>
        </div>
    )
}
*/