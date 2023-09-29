import Hero from '../components/hero';
import RestaurantAPIDicodingSource from
  '../../data/restaurant-api-dicoding';
import CustomLoading from '../../utils/custom-loading';
import FavoriteButtonHomeInitiator from '../../utils/favorite-button-home-initiator';
import UrlParser from '../../routes/url-parser';
import ToastMessage from '../../utils/toast-message';

const Home = {
  async render() {
    return `
    <article>
    ${await Hero.render()}
    <section id="restaurant-container">
    </section>
  </article>`;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant-container');
    const keyword = document.querySelector('#search-restaurant');
    try {
      const {id: query}=UrlParser.parseActiveUrl(false);
      if (query) {
        keyword.value=query;
        // restaurantContainer.innerHTML = '';
        CustomLoading.show(restaurantContainer);
        const restaurants= await RestaurantAPIDicodingSource.searchRestaurants(query);
        this.renderCards(restaurants);
      } else {
        CustomLoading.show(restaurantContainer);
        const restaurants= await RestaurantAPIDicodingSource.listRestaurants();
        this.renderCards(restaurants);
      }

      keyword.addEventListener('keyup', async (event) => {
        if (event.keyCode === 13) {
          restaurantContainer.innerHTML = '';
          CustomLoading.show(restaurantContainer);
          const restaurants= await RestaurantAPIDicodingSource.searchRestaurants(keyword.value);
          this.renderCards(restaurants);
        }
      });
    } catch (error) {
      console.log(error);
      ToastMessage.show('Failed to load data Restaurant', 'error');
    }
  },

  renderCards(restaurants) {
    const restaurantContainer = document.querySelector('#restaurant-container');
    restaurantContainer.innerHTML = '';
    CustomLoading.show(restaurantContainer);
    if (restaurants != null && restaurants.length > 0) {
      CustomLoading.hide(restaurantContainer);
      restaurants.forEach((restaurant) => {
        const card = document.createElement('card-restaurant');
        card.restaurant = restaurant;
        restaurantContainer.appendChild(card);
        const favouriteButton = document.querySelector(`#favourite-container-${restaurant.id}`);
        const favorite = new FavoriteButtonHomeInitiator();
        favorite.init({favouriteButton: favouriteButton, id: restaurant.id});
      });
    } else {
      CustomLoading.hide(restaurantContainer);
      restaurantContainer.innerHTML = '<p class="empty">No Data 😒</p>';
    }
  },


};

export default Home;
