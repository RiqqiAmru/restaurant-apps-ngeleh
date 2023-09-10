require('./custom-element.js');
const main = () => {
  // when click hamburger menu, toggle class
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  hamburger.addEventListener('click', (e) => {
    navMenu.classList.toggle('open');
    e.stopPropagation();
  });

  //auto add class when screen size is bigger than 768px
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      navMenu.classList.remove('open');
    }
  });

  // remove class when click outside of nav-menu
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-menu')) return;
    navMenu.classList.remove('open');
  });

  // add restourant list
  const menu = document.querySelector('#menu');
  const { restaurants } = require('../public/data/DATA.json');
  menu.innerHTML = '';
  restaurants.forEach((restaurant) => {
    const card = document.createElement('card-restaurant');
    card.restaurant = restaurant;
    menu.appendChild(card);
  });
}

module.exports = main;