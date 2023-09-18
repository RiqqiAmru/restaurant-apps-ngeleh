require('./custom-element.js');
const main = () => {
  // add restourant list
  const menu = document.querySelector('#menu');
  const {restaurants} = require('../public/data/DATA.json');
  menu.innerHTML = '';
  restaurants.forEach((restaurant) => {
    const card = document.createElement('card-restaurant');
    card.restaurant = restaurant;
    menu.appendChild(card);
  });
};

module.exports = main;
