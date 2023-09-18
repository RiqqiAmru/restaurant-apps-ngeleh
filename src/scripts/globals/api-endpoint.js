import CONFIG from './config';
const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
  IMAGE_URL: `${CONFIG.BASE_URL}images/small/`,
};
export default API_ENDPOINT;
