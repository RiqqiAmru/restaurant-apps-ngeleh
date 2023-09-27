import UrlParser from '../../routes/url-parser';
import RestaurantAPIDicodingSource from '../../data/restaurant-api-dicoding';
import CustomLoading from '../../utils/custom-loading';

const Detail = {
  async render() {
    return `
  <article>
   <section id="restaurant">

   </section>
   
   </div>
  </article>`;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant');
    const url = UrlParser.parseActiveUrl(false);
    CustomLoading.show(restaurantContainer);
    const {restaurant} = await RestaurantAPIDicodingSource.detail(url.id);
    if (restaurant) {
      CustomLoading.hide(restaurantContainer);
      const detailRestaurant = document.createElement('detail-restaurant');
      detailRestaurant.restaurant = restaurant;
      restaurantContainer.appendChild(detailRestaurant);
    }
  },
};

export default Detail;
