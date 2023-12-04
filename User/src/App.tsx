import React, { useState, useEffect } from 'react';
import UserProductForm from './components/UserForm';
import UserCart from './components/UserCart';
import apiService from './components/apiCalls';
import Product from './components/types/interface';
import { Button } from '@mui/material';
import DenseAppBar from './components/Header';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [userCart, setUserCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

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
        const availableQuantity = selectedProduct.quantity;

        const existingCartItem = userCart.find((item) => item.id === productId);

        if (existingCartItem) {
          if (existingCartItem.quantity + 1 <= availableQuantity) {
            setUserCart((prevCart) =>
              prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
              )
            );
          } else {
            console.warn('Cannot add more of this item. Maximum quantity reached.');
          }
        } else {
          if (1 <= availableQuantity) {
            setUserCart((prevCart) => [...prevCart, { ...selectedProduct, quantity: 1 }]);
          } else {
            console.warn('Cannot add this item. No available quantity.');
          }
        }
      }
    } catch (error) {
      console.error('Error adding to cart', error);
    }
  };

  const cartItemCount = userCart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div >
      <DenseAppBar cartItemCount={cartItemCount} onCartIconClick={() => setShowCart(true)} />
      <UserProductForm products={products} onAddToCart={handleAddToCart} />
      <div >
        {showCart ? (
          <>
            <UserCart cartItems={userCart} />
            <Button variant="contained" color="primary" onClick={() => setShowCart(false)}>
              Back to Products
            </Button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
