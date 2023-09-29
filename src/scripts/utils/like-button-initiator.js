import FavouriteRestaurantIdb from '../data/favourite-restaurant-idb';

const LikeButtonInitiator={
  async init({likeButtonContainer, restaurant}) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavouriteRestaurantIdb.getRestaurant(id)
        .catch((error) => {
          console.log(error);
          ToastMessage.show('Failed to load data Restaurant', 'error');
        });
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = `<button aria-label="like this restaurant" id="likeButton" class="like"><img src="./images/icons/bookmarks.svg" alt="Tambah ke Favorite" /></button>`;

    const likeButton = document.querySelector(`#likeButton`);

    likeButton.addEventListener('click', async () => {
      await FavouriteRestaurantIdb.putRestaurant(this._restaurant)
          .catch((error) => {
            console.log(error);
            ToastMessage.show('Failed to add Favourite Restaurant', 'error');
          });
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = `<button aria-label="unlike this restaurant" id="likeButton" class="like"><img src="./images/icons/bookmarks-fill.svg" alt="Tambah ke Favorite" /></button>`;

    const likeButton = document.querySelector(`#likeButton`);
    likeButton.addEventListener('click', async () => {
      await FavouriteRestaurantIdb.deleteRestaurant(this._restaurant.id)
          .catch((error) => {
            console.log(error);
            ToastMessage.show('Failed to delete this Favourite Restaurant', 'error');
          });
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
