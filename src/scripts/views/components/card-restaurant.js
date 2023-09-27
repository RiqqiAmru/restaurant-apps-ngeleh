import '../../../styles/style.css';
import API_ENDPOINT from '../../globals/api-endpoint';

class CardRestaurant extends HTMLElement {
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
      src="${API_ENDPOINT.IMAGE_URL+restaurant.pictureId}"
      alt=""/>
  </div>
  <div class="card__content">
  <h3 class="card__title" tabindex="0">${restaurant.name}</h3>
  <h4 class="rating" tabindex="0">⭐️ ${restaurant.rating}</h4>
    <p class="card__description" tabindex="0">
    ${restaurant.description}
    </p>
    <div class="card__footer">
      <button class="btn-favourite">
        <img src="./images/icons/bookmarks.svg" alt="Tambah ke Favorite" />
      </button>
      <a href="#/detail/${restaurant.id}" class="btn-detail" tabindex="0">
       <img src="./images/icons/arrow-down-right.svg" alt="detail" />
      </a>
      
    </div>
    </div>
    `;
  }
}

customElements.define('card-restaurant', CardRestaurant);
