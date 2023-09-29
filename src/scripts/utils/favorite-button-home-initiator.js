import FavouriteRestaurantIdb from '../data/favourite-restaurant-idb';
import RestaurantAPIDicodingSource from '../data/restaurant-api-dicoding';
import ToastMessage from './toast-message';

class FavoriteButtonHomeInitiator {
  async init({favouriteButton, id}) {
    this._favouriteButton = favouriteButton;
    this._id = id;
    await this._renderButton();
    const {restaurant} = await RestaurantAPIDicodingSource.detail(
        this._id,
    ).catch((error) => {
      console.log(error);
      ToastMessage.show('Failed to load data Restaurant', 'error');
    });
    this._restaurant = restaurant;
  }

  async _renderButton() {
    if (await this._isRestaurantExist(this._id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  }

  async _isRestaurantExist(id) {
    const restaurant = await FavouriteRestaurantIdb.getRestaurant(id)
        .catch((error) => {
          console.log(error);
          ToastMessage.show('Failed to load data Restaurant', 'error');
        });
    return !!restaurant;
  }

  _renderLike() {
    this._favouriteButton.innerHTML = `
    <button id="favorite-${this._id}">
    <img src="./images/icons/bookmarks.svg" alt="Tambah ke Favorite" />
    </button>
    `;

    const button = document.querySelector(`#favorite-${this._id}`);

    button.addEventListener('click', async () => {
      await FavouriteRestaurantIdb.putRestaurant(this._restaurant)
          .catch((error) => {
            console.log(error);
            ToastMessage.show('Failed to add Favourite Restaurant', 'error');
          });
      this._renderButton();
    });
  }

  _renderLiked() {
    this._favouriteButton.innerHTML = `
    <button id="favorite-${this._id}">
    <img src="./images/icons/bookmarks-fill.svg" alt="Hapus dari  Favorite" />
    </button>
    `;

    const button = document.querySelector(`#favorite-${this._id}`);

    button.addEventListener('click', async () => {
      await FavouriteRestaurantIdb.deleteRestaurant(this._id)
          .catch((error) => {
            console.log(error);
            ToastMessage.show('Failed to delete this Favourite Restaurant', 'error');
          });
      this._renderButton();
    });
  }
}

export default FavoriteButtonHomeInitiator;
