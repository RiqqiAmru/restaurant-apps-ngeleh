require('../styles/style.css');

class Card extends HTMLElement {
  constructor(restaurant) {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render(restaurant);
  };

  render(restaurant) {
    this.innerHTML = `
    <style>
      #gambar-${restaurant.id} {
        background-image: url("${restaurant.pictureId}");
      }
    </style>
    <div class="card__image" id="gambar-${restaurant.id}">
    <span class="kota">${restaurant.city}</span>
  </div>
  <div class="card__content">
    <h4 class="rating">Rating : ${restaurant.rating}</h4>
    <h3 class="card__title">${restaurant.name}</h3>
    <p class="card__description">
    ${restaurant.description}
    </p>
    <div class="card__footer">
      <button class="btn-favourite">Add to Favourite</button>
      <button class="btn-booking">Booking Now</button>
    </div>
    </div>
    `;
  }
}

customElements.define('card-restaurant', Card);