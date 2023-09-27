import Hero from '../components/hero';
import RestaurantAPIDicodingSource from
  '../../data/restaurant-api-dicoding';
import CustomLoading from '../../utils/custom-loading';

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
    CustomLoading.show(restaurantContainer);
    const restaurants= await RestaurantAPIDicodingSource.listRestaurants();
    if (restaurants) {
      CustomLoading.hide(restaurantContainer);
      restaurants.forEach((restaurant) => {
        const card = document.createElement('card-restaurant');
        card.restaurant = restaurant;
        restaurantContainer.appendChild(card);
      });
    }
  },
};

export default Home;
