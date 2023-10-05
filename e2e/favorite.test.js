const assert = require('assert');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing no data restaurant', ({I}) => {
  I.seeElement('#restaurant-container');
  I.see('No Data 😒', '.empty');
});

Scenario('liking one restaurant via detail', async ({I}) => {
  I.see('No Data 😒', '.empty');

  I.amOnPage('/');

  I.seeElement('card-restaurant .card__footer a');
  const firstRestaurantTitle = await I.grabTextFrom('.card__title');
  const firstRestaurant = locate('card-restaurant .card__footer a').first();
  I.click(firstRestaurant);


  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('card-restaurant ');
  const likedRestaurantTitle = await I.grabTextFrom('.card__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant in detail page', async ({I}) => {
  I.see('No Data 😒', '.empty');

  I.amOnPage('/');

  I.seeElement('card-restaurant .card__footer a');
  const firstRestaurant = locate('card-restaurant .card__footer a').first();
  const firstRestaurantTitle = await I.grabTextFrom('.card__title');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('card-restaurant ');
  const likedRestaurantTitle = await I.grabTextFrom('.card__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click('.card__footer a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.see('No Data 😒', '.empty');
});

Scenario('liking one restaurant in home page', async ({I}) => {
  I.see('No Data 😒', '.empty');

  I.amOnPage('/');

  I.seeElement('card-restaurant .card__footer a');
  const firstRestaurantTitle = await I.grabTextFrom('.card__title');


  I.seeElement('.card__footer button');
  I.click('.card__footer button');

  I.amOnPage('/#/favourite');
  I.seeElement('card-restaurant ');
  const likedRestaurantTitle = await I.grabTextFrom('.card__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant in home page', async ({I}) => {
  I.see('No Data 😒', '.empty');

  I.amOnPage('/');

  const firstRestaurantTitle = await I.grabTextFrom('.card__title');

  I.seeElement('.card__footer button');
  I.click('.card__footer button');

  I.amOnPage('/#/favourite');
  I.seeElement('card-restaurant ');
  const likedRestaurantTitle = await I.grabTextFrom('.card__title');
  // get button id
  const buttonId = await I.grabAttributeFrom('.card__footer a', 'id');
  // slice button id
  const justId = buttonId.slice(7);

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.amOnPage('/');

  I.seeElement(`#favorite-${justId}`);
  I.click(`#favorite-${justId}`);

  I.amOnPage('/#/favourite');
  I.see('No Data 😒', '.empty');
});


