import API_ENDPOINT from '../globals/api-endpoint';

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
};

export default RestaurantAPIDicodingSource;
