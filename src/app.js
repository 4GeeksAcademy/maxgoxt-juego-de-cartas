/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// import { Generator } from "webpack";

window.onload = function() {
  document.getElementById("num").innerHTML = card();
  document.getElementById("palo").innerHTML = palo();
  let palo2 = document.getElementById("palo2");
  palo2.innerHTML = document.getElementById("palo").innerHTML;
};

let card = () => {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numIdx = Math.floor(Math.random() * number.length);
  return number[numIdx];
};

let palo = () => {
  let palos = ["♦", "♥", "♠", "♣"];
  let paloIdx = Math.floor(Math.random() * palos.length);
  let p = document.getElementById("palo");
  let p3 = document.getElementById("palo2");
  if (palos[paloIdx] == "♦" || palos[paloIdx] == "♥") {
    p.style.color = "red";
    p3.style.color = "red";
  }
  return palos[paloIdx];
};
