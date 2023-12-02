import { useState } from 'react';
import { Button,TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Product from './types/interface';
interface ProductFormProps {
  onAddProduct: (newProduct: Product) => void;
  products: Product[];
}

const ProductForm = ({ onAddProduct}: ProductFormProps) => {
  const [id, setId] = useState<string>('')  
  const [productName, setProductName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);

  const isIdValid = (idToCheck: string): boolean => {
    const idRegex = /^[a-zA-Z]{3}-\d{5}$/;
    return idRegex.test(idToCheck);
  };

  const isProductNameValid = (nameToCheck: string): boolean => {
    return nameToCheck.length <= 30;
  };


  const handleAddProduct = () => {
    if (!isIdValid(id) || !isProductNameValid(productName)) {
      alert('Invalid input. Please check the values.');
      return;
    }

    const newProduct: Product = {
      id,
      productName,
      quantity: Number(quantity),
    };
    onAddProduct(newProduct);
    setId('');
    setProductName('');
    setQuantity(0);
  };

  return (
    <div style={{ marginTop: '30px', marginBottom: '20px', textAlign: 'center' }}>
      <TextField
        label="ProductID"
        variant="outlined"
        placeholder='abc-12345'
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={{ marginLeft: '50px', width: '100px' }}
      />
      <TextField
        label="Name"
        variant="outlined"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={{ marginLeft: '50px', width: '100px' }}
      />
      <TextField
        label="Quantity"
        variant="outlined"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{ marginLeft: '50px', width: '100px' }}
      />
      <Button variant="contained" onClick={handleAddProduct} style={{ marginLeft: '10px' }}>
        <AddIcon />
      </Button>
    </div>
  );
};

export default ProductForm;

