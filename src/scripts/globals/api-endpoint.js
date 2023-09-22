import CONFIG from './config';
const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  detail: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  search: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
  IMAGE_URL: `${CONFIG.BASE_URL}images/medium/`,
};
export default API_ENDPOINT;
