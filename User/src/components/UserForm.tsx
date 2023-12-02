import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import  Product  from './types/interface';

interface UserProductFormProps {
  products: Product[];
  onAddToCart: (productId: string) => void;
}

const UserProductForm: React.FC<UserProductFormProps> = ({ products, onAddToCart }) => {
  const handleAddToCart = (productId: string) => {
    onAddToCart(productId);
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleAddToCart(product.id)}>
                    Add to Cart
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UserProductForm;

