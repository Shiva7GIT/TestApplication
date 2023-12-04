import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Product from './types/interface';

interface UserCartProps {
  cartItems: Product[];
}

const UserCart: React.FC<UserCartProps> = ({ cartItems }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Paper>
      <TableContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </div>
  );
};

export default UserCart;
