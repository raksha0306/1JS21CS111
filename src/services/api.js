import axios from 'axios';

const API_BASE_URL = 'http://your-api-endpoint.com';

export const fetchProducts = async () => {
  // Make API call to fetch products
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const fetchProductDetails = async (id) => {
  // Make API call to fetch product details
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};
