import "./style.css";
import Header from "./modules/header.js";
import HeroSection from "./modules/HeroSection.js";
import showMealUI from "./modules/ShowMealUI.js";
import InvolvementAPI from "./modules/involvementAPI";
import MealAPI from "./modules/mealAPI";

const main = document.querySelector(".main-container");

const handleLikes = () => {};

window.addEventListener("load", async () => {
  document.body.appendChild(Header());
  main.appendChild(await HeroSection());
  main.appendChild(await showMealUI.MealDisplay());
  document.body.appendChild(main);

  const mealSection = document.querySelector(".meal-section");
  mealSection.addEventListener("click", async (e) => {
    if (e.target.classList.contains("meal-cat")) {
      const category = e.target.textContent;
      let cardContainer = document.querySelector(".card-container");
      let mealContainer = document.querySelector(".meal-card");
      mealContainer.remove();
      cardContainer.appendChild(await showMealUI.createCard(category));
    }

    if (e.target.classList.contains("fa-heart")) {
      showMealUI.handleLikeUI(e);

      const mealName =
        e.target.parentElement.parentElement.parentElement.firstElementChild
          .firstElementChild.textContent;
      await InvolvementAPI.addLike(mealName);
    }
  });
});
