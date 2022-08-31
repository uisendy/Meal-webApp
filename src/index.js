import "./style.css";
import Header from "./components/header.js";
import HeroSection from "./components/HeroSection.js";
import MealDisplay from "./components/MealDisplay.js";

const main = document.querySelector(".main-container");

console.log(Header());

document.body.appendChild(Header());
main.appendChild(HeroSection());
main.appendChild(MealDisplay());
document.body.appendChild(main);
