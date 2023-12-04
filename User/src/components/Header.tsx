import React from 'react';
import {Box,  AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface DenseAppBarProps {
  cartItemCount: number;
  onCartIconClick: () => void;
}

const DenseAppBar: React.FC<DenseAppBarProps> = ({ cartItemCount, onCartIconClick }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box style={{ width: '100vw' }}>
          <Toolbar variant="dense">
          <Typography style={{textAlign:'center', display:'flex',marginLeft:'50%', marginRight:'auto'}} variant="h6" color="inherit">
            E-Kart
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={onCartIconClick}>
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
        </Box>
      </AppBar>
    </Box>
    </div>
  );
};

export default DenseAppBar;
