/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint quotes: ["error", "double", { "avoidEscape": true }] */
import InvolvementAPI from "./involvementAPI.js";

const list = document.querySelector(".list");

export default class UserInterface {
  static displayRecipes(mealsArr, likes = []) {
    mealsArr.forEach((recipe) => {
      const mealLikes = InvolvementAPI.getMealLikes(likes, recipe.idMeal);
      this.createCard(recipe, mealLikes);
    });
  }

  static displayCategories(categoriesArr) {
    categoriesArr.forEach((category) => {
      this.createCategoryCard(category);
    });
  }

  static createCategoryCard({ idCategory, strCategory, strCategoryThumb }) {
    const LI = document.createElement("li");
    LI.classList.add("category__card");
    LI.setAttribute("id", idCategory);
    LI.innerHTML = `
      <img class="category__image" src="${strCategoryThumb}" alt="Delicious ${strCategory}">
      <div class="category__content">
          <div class="category__header">
              <h2 class="category__title">${strCategory}</h2>
          </div>
      </div>
    `;
    list.appendChild(LI);
  }

  static createCard = async (
    { strMeal = "", strMealThumb = "", idMeal },
    likes = 0
  ) => {
    const LI = document.createElement("li");
    LI.classList.add("recipes__card");
    LI.setAttribute("id", idMeal);
    LI.innerHTML = `
      <img class="recipes__image" src="${strMealThumb}" alt="Delicious ${strMeal}">
      <div class="recipes__content">
          <div class="recipes__header">
              <h2 class="recipes__title">${strMeal}</h2>
              <i class="fa-regular fa-heart"></i>
          </div>
          <span class="recipes__likes"><span>${likes}</span> like${
      likes === 1 ? "" : "s"
    }</span>
          <button class="recipes__comments">Comments</button>
      </div>
    `;
    list.appendChild(LI);
  };

  static addToLikesCounterDOM(element) {
    let likes =
      element.parentElement.nextElementSibling.firstElementChild.textContent;
    likes++;
    element.parentElement.nextElementSibling.innerHTML = `<span>${likes}</span> like${
      likes === 1 ? "" : "s"
    }`;
  }

  static counterText(type) {}

  static itemCount(element) {}
}
