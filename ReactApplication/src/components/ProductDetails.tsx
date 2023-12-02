import React, { useState } from 'react';
import { Avatar, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Product from './types/interface';
import UpdateForm from './UpdateForm';


interface ProductDetailsProps {
  productDetails: Product[];
  onDeleteProduct: (id: string) => void;
  onUpdateProduct: (id: string, updatedProduct: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productDetails, onUpdateProduct, onDeleteProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleUpdateClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleUpdateProduct = (id: string, updatedProduct: Product) => {
    onUpdateProduct(id, updatedProduct);
    setSelectedProduct(null); 
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainer component={Paper} style={{ maxWidth: '600px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productDetails.map((product) => (
                <TableRow key={product.id}>
                  <TableCell><Avatar sx={{ marginTop :'8px'}}>{product.id.charAt(0)}</Avatar></TableCell>
                  <TableCell>{product.productName}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>
                    <Button onClick={() => onDeleteProduct(product.id)}>
                      <IconButton aria-label="delete" size="large">
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleUpdateClick(product)}>
                      <IconButton aria-label="update" size="large">
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {selectedProduct && (
        <div style={{ marginTop: '20px' }}>
          <UpdateForm onUpdateProduct={handleUpdateProduct} product={selectedProduct} />
        </div>
      )}
    </>
  );
};

export default ProductDetails;
