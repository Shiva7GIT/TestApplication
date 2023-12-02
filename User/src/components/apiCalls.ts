import axios from 'axios';
import  Product from '../components/types/interface';

const BASE_URL = 'http://localhost:5000';

const apiService = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const response = await axios.get<Product[]>(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  }
}
  

export default apiService;
