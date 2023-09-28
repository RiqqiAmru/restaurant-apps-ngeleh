import UrlParser from '../../routes/url-parser';
import RestaurantAPIDicodingSource from '../../data/restaurant-api-dicoding';
import CustomLoading from '../../utils/custom-loading';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
  <article>
   <section id="restaurant">
   </section>
   <div id="likeButtonContainer"></div>
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
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurant,
    });
  },
};

export default Detail;
