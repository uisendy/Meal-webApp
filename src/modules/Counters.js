export default class Counters {
  static showTotalCategory = () => {
    const noOfCategory = Array.from(
      document.querySelectorAll('.category__card'),
    );
    document.querySelectorAll('.counter').forEach((category) => {
      category.innerText = `Showing all ${noOfCategory.length} Categories`;
    });
    return noOfCategory;
  };

  static showTotalMealInCategory = (categoryName) => {
    const noOfMeal = Array.from(document.querySelectorAll('.recipes__card'));
    document.querySelector(
      '.landing__counter',
    ).innerText = `${categoryName}(${noOfMeal.length})`;
    return noOfMeal;
  };
}
