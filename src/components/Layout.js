// filepath: /d:/internship/personal-finance-visualizer/frontend/src/components/Layout.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Container, Typography, Alert, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Layout({ children, error }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1, fontFamily: 'serif', fontWeight: 'bold', color: '#ff9800' }}>
            Personal Finance Visualizer
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose} component={Link} to="/">Dashboard</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/transactions">Transactions</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/budgets">Budgets</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/" sx={{ color: '#fff', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Dashboard
              </Button>
              <Button color="inherit" component={Link} to="/transactions" sx={{ color: '#fff', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Transactions
              </Button>
              <Button color="inherit" component={Link} to="/budgets" sx={{ color: '#fff', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Budgets
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Container className="App">
        {error && <Alert severity="error">{error}</Alert>}
        {children}
      </Container>
    </>
  );
}

export default Layout;