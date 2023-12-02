import React, { useState, useEffect } from 'react';
import UserProductForm from './components/UserForm';
import UserCart from './components/UserCart';
import apiService from './components/apiCalls';
import Product  from './components/types/interface';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [userCart, setUserCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId: string) => {
    try {
      const selectedProduct = products.find((product) => product.id === productId);
      if (selectedProduct) {
        setUserCart((prevCart) => [...prevCart, selectedProduct]);
      }
    } catch (error) {
      console.error('Error adding to cart', error);
    }
  };

  return (
    <div>
      <h2>User Shopping Cart</h2>
      <UserProductForm products={products} onAddToCart={handleAddToCart} />
      <h4>cart items</h4>
      <UserCart cartItems={userCart} />
    </div>
  );
};

export default App;
