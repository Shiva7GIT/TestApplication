import { useEffect, useState } from 'react';
import ProductForm from '../src/components/ProductForm';
import ProductDetails from '../src/components/ProductDetails';
import DenseAppBar from '../src/components/Header';
import CircularProgress from '@mui/material/CircularProgress';
import apiService from './apiCalls/apiCalls';
import Product from './components/types/interface';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await apiService.getProducts();
      setProducts(data);
    } catch (error : any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (newProduct: Product) => {
    try {
      setLoading(true);
      const addedProduct = await apiService.addProduct(newProduct);
      setProducts([...products, addedProduct]);
    } catch (error : any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    fetchProducts();
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      setLoading(true);
      await apiService.deleteProduct(id);
      setProducts((prevEmployees) => prevEmployees.filter((product) => product.id !== id));
    } catch (error : any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    fetchProducts();
  };

  const handleUpdateProduct = async (id: string, updatedProduct: Product) => {
    try {
      setLoading(true);
      const updatedProductData = await apiService.updateProduct(id, updatedProduct);
      setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === id ? updatedProductData : product))
      );
    } catch (error : any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <DenseAppBar />
      <ProductForm onAddProduct={handleAddProduct} products={products} />
      {products.length > 0 && (
        <ProductDetails productDetails={products} onDeleteProduct={handleDeleteProduct} onUpdateProduct={handleUpdateProduct} />
      )}

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {loading && <CircularProgress />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default App;
