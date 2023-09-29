import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/style.css';
import App from './views/app';
import swRegister from './utils/sw-register';

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
} );
