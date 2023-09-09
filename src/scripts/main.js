const main = () => {
  // when click hamburger menu, toggle class
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  hamburger.addEventListener('click', (e) => {
    navMenu.classList.toggle('open');
    e.stopPropagation();
  });

  // auto add class when screen size is bigger than 768px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.add('open');
    }
  });

  // remove class when click outside of nav-menu
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-menu')) return;
    navMenu.classList.remove('open');
  });

}

module.exports = main;