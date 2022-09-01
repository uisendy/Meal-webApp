import Image from "../asset/Food-removebg-preview.png";
import MealAPI from "./mealAPI";

const HeroSection = async () => {
  const heroSection = document.createElement("section");
  heroSection.className = "hero-section";
  const randomMeal = await MealAPI.getRandom();

  heroSection.innerHTML = `
  <div class="hero-container">
    <div class="header-cta">
      <h1 class="hero-header">Make that <br/>Meal you Love Most today!</h1>
      <p class="hero-description">
        Learn how to get you best meal prepared by you at yours with our well organized recipe. 
      </p>
      <a class="get-started" href="#">Get started today</a>
    </div>
    <div class="hero-image">
  <img src= ${randomMeal.meals[0].strMealThumb} alt="image-hero" />
</div>
  </div>
  
  `;

  return heroSection;
};

export default HeroSection;
