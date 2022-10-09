import React from "react";
import ReactDOM from "react-dom";

const appName = "React App";
const fname = "Gareth";
const lname = "Gamble";
const num1 = 7;
const num2 = 15;
const num3 = 36;
const date = new Date();
const year = date.getFullYear();

ReactDOM.render(
  <div>
    <h1>{appName}</h1>
    <ul>
      <li>List Item {num1}</li>
      <li>List Item {num2}</li>
      <li>List Item {num3}</li>
    </ul>
    <p>Your lucky number is: {Math.floor(Math.random() * 10)}</p>
    <p>
      Created by {fname} {lname}
    </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
