import Hero from '../components/hero';
import RestaurantAPIDicodingSource from
  '../../data/restaurant-api-dicoding';

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
    const restaurants= await RestaurantAPIDicodingSource.listRestaurants();
    restaurants.forEach((restaurant) => {
      const card = document.createElement('card-restaurant');
      card.restaurant = restaurant;
      restaurantContainer.appendChild(card);
    });
  },
};

export default Home;
