import API_ENDPOINT from '../globals/api-endpoint';
import ToastMessage from '../utils/toast-message';

const RestaurantAPIDicodingSource = {
  async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  },

  async detail(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    return response.json();
  },

  async addReview(review) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      return response.json();
    } catch (error) {
      console.log(error);
      this.pendingReview(review);
      ToastMessage.show('Tidak ada koneksi internet, review akan dikirimkan ketika koneksi tersedia', 'info');
    }
  },

  async searchRestaurants(query) {
    const response = await fetch(API_ENDPOINT.search(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  },

  pendingReview(review) {
    const pendingReview = localStorage.getItem('pendingReview');
    if (pendingReview === null) {
      localStorage.setItem('pendingReview', JSON.stringify([review]));
    } else {
      const pendingReviewArray = JSON.parse(pendingReview);
      pendingReviewArray.push(review);
      localStorage.setItem('pendingReview', JSON.stringify(pendingReviewArray));
    }
  },

  sendPendingReview() {
    const pendingReview = localStorage.getItem('pendingReview');
    if (pendingReview !== null) {
      const pendingReviewArray = JSON.parse(pendingReview);
      pendingReviewArray.forEach((review) => {
        RestaurantAPIDicodingSource.addReview(review);
      });
      localStorage.removeItem('pendingReview');
      ToastMessage.show('Berhasil mengirimkan review yang di pending karena offline', 'success');
    }
  },
};

export default RestaurantAPIDicodingSource;
