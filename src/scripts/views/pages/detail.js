import UrlParser from '../../routes/url-parser';
import RestaurantAPIDicodingSource from '../../data/restaurant-api-dicoding';
import OpenTabInitiator from '../../utils/open-tab-initiator';

const Detail = {
  async render() {
    return `
  <article>
   <section id="restaurant">

   </section>
  </article>`;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant');
    const url = UrlParser.parseActiveUrl(false);
    const {restaurant} = await RestaurantAPIDicodingSource.detail(url.id);

    const detailRestaurant = document.createElement('detail-restaurant');
    detailRestaurant.restaurant = restaurant;
    restaurantContainer.appendChild(detailRestaurant);

    const btnTabPane = document.querySelectorAll('.btn_tab_pane');
    btnTabPane.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        OpenTabInitiator.openTab(event, 'tab-'+event.target.id);
        console.log();
      });
    });
  },
};

export default Detail;
