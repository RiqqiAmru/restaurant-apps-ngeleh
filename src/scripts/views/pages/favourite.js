import Hero from '../components/hero';
import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import CustomLoading from '../../utils/custom-loading';

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

    const restaurants = await FavouriteRestaurantIdb.getAllRestaurant();
    document.querySelector('#search-restaurant').remove();

    CustomLoading.show(restaurantContainer);
    this.renderCards(restaurants);
  },

  renderCards(restaurants) {
    const restaurantContainer = document.querySelector('#restaurant-container');
    console.log(restaurantContainer);
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
