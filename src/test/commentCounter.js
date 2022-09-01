import PopUp from '../modules/popUp.js';

const createEnv = (comments = []) => {
  PopUp.pop({
    strMeal: 'meal',
    strMealThumb: 'thumb',
    idMeal: 0,
    comments,
    type: 'Recipe',
    strInstructions: '',
  });
  const container = document.createElement('div');
  const el = document.createElement('span');
  el.classList.add('recipes__popup_comment-count');
  container.appendChild(el);
  return [container];
};

describe('Counting number of comments', () => {
  it('Count 0 comments', () => {
    createEnv();
    const num = PopUp.data.comments.length;

    expect(num).toEqual(0);
  });
});
