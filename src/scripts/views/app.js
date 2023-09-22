import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerNavInitiator from '../utils/drawer-nav-initiator';
import './components/card-restaurant';
import './components/detail-restaurant';

class App {
  constructor({hamburgerBtn, navContent, mainContent}) {
    this._hamburgerBtn = hamburgerBtn;
    this._navContent = navContent;
    this._mainContent = mainContent;

    this.init();
  }

  init() {
    DrawerNavInitiator.init({
      button: this._hamburgerBtn,
      drawer: this._navContent,
      content: this._mainContent,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrl(true);
    const page = routes[url];
    console.log(url);
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
