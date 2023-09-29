import Hero from '../components/hero';
import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import CustomLoading from '../../utils/custom-loading';
import ToastMessage from '../../utils/toast-message';

const Favourite = {
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

    try {
      const restaurants = await FavouriteRestaurantIdb.getAllRestaurant();
      const favouriteTitle = document.createElement('h1');
      favouriteTitle.setAttribute('class', 'title-2');
      favouriteTitle.innerHTML = 'Favourite Restaurant';
      document.querySelector('#search-restaurant').replaceWith(favouriteTitle);

      CustomLoading.show(restaurantContainer);
      this.renderCards(restaurants);
    } catch (error) {
      console.log(error);
      ToastMessage.show('Failed to load data Favourite', 'error');
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

        document.querySelector(`#favourite-container-${restaurant.id}`).remove();
      });
    } else {
      CustomLoading.hide(restaurantContainer);
      restaurantContainer.innerHTML = '<p class="empty">No Data 😒</p>';
    }
  },
};

export default Favourite;
