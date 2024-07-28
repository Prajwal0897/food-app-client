import React from 'react';
import { AppBar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#f9f8fc', boxShadow: 'none', paddingBottom: '8px' }}>
        {/* <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" style={{ color: '#120d1c', fontWeight: 'bold', textAlign: 'center', flex: 1 }}>
            Categories
          </Typography>
        </Toolbar> */}
      </AppBar>
      <BottomNavigation
        style={{ borderTop: '1px solid #ebe6f4', backgroundColor: '#f9f8fc' }}
        onChange={(event, newValue) => {
          if (newValue === 'home') navigate('/main');
          if (newValue === 'browse') navigate('/search');
          if (newValue === 'orders') navigate('/orders');
          if (newValue === 'account') navigate('/profile');
        }}
      >
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon style={{ color: '#63479e' }} />} />
        <BottomNavigationAction label="Browse" value="browse" icon={<SearchIcon style={{ color: '#120d1c' }} />} />
        <BottomNavigationAction label="Orders" value="orders" icon={<ReceiptIcon style={{ color: '#63479e' }} />} />
        <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon style={{ color: '#63479e' }} />} />
      </BottomNavigation>
    </div>
  );
};

export default Navbar;
