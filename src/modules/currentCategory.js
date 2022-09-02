/* eslint-disable linebreak-style */
/* eslint quotes: ["error", "double", { "avoidEscape": true }] */
export default class CurrentCategory {
  meals;

  constructor(categoryMeals = []) {
    this.meals = categoryMeals;
  }
}
