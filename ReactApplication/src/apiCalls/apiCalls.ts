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
  },

  addProduct: async (newProduct: Product): Promise<Product> => {
    try {
      const response = await axios.post<Product>(`${BASE_URL}/addProduct`, newProduct);
      return response.data;
    } catch (error) {
      throw new Error('Error adding product');
    }
  },

  deleteProduct: async (id: string): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/deleteProduct/${id}`);
    } catch (error) {
      throw new Error('Error deleting product');
    }
  },

  updateProduct: async (id: string, updatedProduct: Product): Promise<Product> => {
    try {
      const response = await axios.put<Product>(`${BASE_URL}/updateProduct/${id}`, updatedProduct);
      return response.data;
    } catch (error) {
      throw new Error('Error updating product');
    }
  },
};

export default apiService;
