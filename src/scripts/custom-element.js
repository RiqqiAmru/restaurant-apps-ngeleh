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
    <div class="card__image" id="gambar-${restaurant.id}">
    <span class="kota" tabindex="0">${restaurant.city}</span>
    <img
      src="${restaurant.pictureId}"
      alt="ini ada gambarnya"/>
  </div>
  <div class="card__content">
  <h3 class="card__title" tabindex="0">${restaurant.name}</h3>
  <h4 class="rating" tabindex="0">Rating : ${restaurant.rating}</h4>
    <p class="card__description" tabindex="0">
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