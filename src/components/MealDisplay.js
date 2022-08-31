import HeroSection from "./HeroSection";

const MealDisplay = () => {
  const mealSection = document.createElement("section");
  mealSection.className = "meal-section";

  const mealHeader = document.createElement("div");
  mealHeader.className = "meal-sec-header";

  const heading = document.createElement("h2");
  heading.className = "meal-sec-heading";

  const categoryContainer = document.createElement("div");
  categoryContainer.className = "meal-cat-container";

  const mealCategory = document.createElement("ul");

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  const mealCard = document.createElement("div");
  mealCard.className = "meal-card";

  cardContainer.appendChild(mealCard);

  mealCard.innerHTML = `
  <div class="meal-card-container">
   <div class="meal-card-container__info">
    <span><i class="fas fa-eye"></i>2350</span>
    <span><i class="fas fa-comment-alt"></i>624</span>
    <span><i class="fas fa-download"></i>1470</span>
   </div>
   <di class="meal-card-container__profile">
    <div class="container__profile__text">
     <h2>White Mountains</h2>
     <p>by <b>Joseph Therrien</b></p>
    </div>
    <span><i class="fas fa-download"></i>1470</span>
   </di>
  </div>
  `;

  mealSection.appendChild(cardContainer);
  return mealSection;
};

export default MealDisplay;
