import UrlParser from '../../routes/url-parser';
import RestaurantAPIDicodingSource from '../../data/restaurant-api-dicoding';

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
  },
};

export default Detail;
