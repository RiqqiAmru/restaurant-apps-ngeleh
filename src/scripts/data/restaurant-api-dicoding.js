import API_ENDPOINT from '../globals/api-endpoint';

const RestaurantAPIDicodingSource = {
  async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  },
};

export default RestaurantAPIDicodingSource;
