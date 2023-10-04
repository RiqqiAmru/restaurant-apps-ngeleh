import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/style.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// eslint-disable-next-line no-unused-vars
const START = 10;
// eslint-disable-next-line no-unused-vars
const NUMBER_OF_IMAGES = 20;

const hamburgerBtn = document.querySelector('.hamburger');
const navContent = document.querySelector('.nav-menu');
const mainContent = document.querySelector('main');

const app = new App({
  hamburgerBtn,
  navContent,
  mainContent,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();

  await swRegister();
});
