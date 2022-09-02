import Counters from "../modules/Counters.js";

const makeList = (n, className) => {
  const LIST = document.createElement("ul");
  LIST.className = "list";
  for (let i = 1; i <= n; i++) {
    const categoryCard = document.createElement("li");
    categoryCard.id = `${i}`;
    categoryCard.className = `${className}`;
    LIST.appendChild(categoryCard);
  }
  document.body.appendChild(LIST);
};

describe("Category Count", () => {
  it("Total number of Category should return 10", () => {
    makeList(5, "category__card");
    expect(Counters.showTotalCategory().length).toEqual(5);
  });

  it("Total number of Category should return 0", () => {
    document.body.innerHTML = `
    makeList(0, "category__card");
    `;
    expect(Counters.showTotalCategory().length).toEqual(0);
  });
});
