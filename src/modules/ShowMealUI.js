import HeroSection from "./HeroSection";
import MealAPI from "./mealAPI";
import InvolvementAPI from "./involvementAPI";

class showMealUI {
  static MealDisplay = async () => {
    const mealSection = document.createElement("section");
    mealSection.className = "meal-section";

    mealSection.appendChild(await this.createMealHeader());
    mealSection.appendChild(await this.createCardContainer());
    return mealSection;
  };

  static createMealHeader = async () => {
    const mealHeader = document.createElement("div");
    mealHeader.className = "meal-sec-header";

    const heading = document.createElement("h2");
    heading.className = "meal-sec-heading";
    heading.textContent = "Meals";
    mealHeader.appendChild(heading);
    mealHeader.appendChild(await this.displayCategory());
    return mealHeader;
  };
  static displayCategory = async () => {
    const mealCategories = await MealAPI.getCategories();
    const categoryContainer = document.createElement("div");
    categoryContainer.className = "meal-cat-container";

    const mealCategoryLists = document.createElement("ul");
    mealCategoryLists.className = "meal-cat-list";

    mealCategories.forEach((category) => {
      const mealCategory = document.createElement("li");
      mealCategory.className = "meal-cat";
      mealCategory.textContent = category.strCategory;
      mealCategoryLists.appendChild(mealCategory);
    });

    categoryContainer.appendChild(mealCategoryLists);
    return categoryContainer;
  };

  static createCardContainer = async () => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    cardContainer.appendChild(await this.createCard());
    return cardContainer;
  };

  static createCard = async (category = "Miscellaneous") => {
    const mealCard = document.createElement("div");
    mealCard.className = "meal-card";
    const showMeal = await MealAPI.getByCategory(category);
    showMeal.forEach((meal) => {
      this.showMealCards(mealCard, meal, category);
    });
    return mealCard;
  };

  static showMealCards = async (card, meal, category) => {
    const likes = await this.getLikes(meal);
    card.innerHTML += `
    <div 
    class="meal-card-container" 
    style="background-image: url(${meal.strMealThumb});"
    >
      <div class="meal-card-container__info">
      </div>
      <div class="meal-card-container__profile">
        <div class="container__profile__text">
          <h2>${meal.strMeal}</h2>
          <p><b>${category}</b></p>
        </div>
        <div class = "like-comment">
          <span class = "like-btn" ><i class="far fa-heart"></i><p>${likes}</p></span>
          <span class = "comment-btn"><i class="far fa-comment-alt"></i></span>
        </div>
      </div>
    </div>
    `;
    return card;
  };

  static getLikes = async (meal) => {
    const getLikes = await InvolvementAPI.getAllLikes();
    const likes = getLikes.map((likesObj) =>
      likesObj.item_id === meal.strMeal ? likesObj.likes : 0
    );
    const mealLikes = likes.reduce((a, b) => a + b);
    return mealLikes;
  };

  static handleLikeUI = (event) => {
    const mealLikes = event.target.nextSibling.textContent;
    let counter = parseInt(mealLikes);
    counter++;
    event.target.nextSibling.textContent = counter;
  };
}

export default showMealUI;
