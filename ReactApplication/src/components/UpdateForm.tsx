import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Product from './types/interface';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

interface UpdateFormProps {
    onUpdateProduct: (id: string, updatedProduct: Product) => void;
    product: Product;
}

const UpdateForm = ({ onUpdateProduct, product }:UpdateFormProps) => { 
  const [updatedProductName, setUpdatedProductName] = useState<string>(product.productName);
  const [updatedQuantity, setUpdatedQuantity] = useState<number>(product.quantity);

  const handleUpdate = () => {
    const updatedProduct: Product = {
      id: product.id,
      productName: updatedProductName,
      quantity: updatedQuantity,
    };

    onUpdateProduct(product.id, updatedProduct);
  };

  return (
    <>
    <div style={{ textAlign: 'center', display : 'flex', justifyContent : 'center'}}>
      <h4>Edit Product Here</h4>
    </div>
    <div style={{ marginTop: '30px', marginBottom: '20px', textAlign: 'center', display : 'flex', justifyContent : 'center'}}>
      
      <Avatar sx={{ bgcolor: deepPurple[500], marginTop :'8px'}}>{product.id.charAt(0)}</Avatar>
      
      <TextField
        label="Name"
        variant="outlined"
        value={updatedProductName}
        onChange={(e) => setUpdatedProductName(e.target.value)}
        style={{ marginLeft: '10px', width: '150px' }}
      />
     
      <TextField
        label="Quantity"
        variant="outlined"
        value={updatedQuantity}
        onChange={(e) => setUpdatedQuantity(Number(e.target.value))}
        style={{ marginLeft: '10px', width: '100px' }}
      />
      <Button variant="contained" onClick={handleUpdate} style={{ marginLeft: '10px' }}>
        Edit
      </Button>
    </div>
    </>
  );
};

export default UpdateForm;
