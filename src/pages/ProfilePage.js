import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Avatar,
  Tabs,
  Tab
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Springfield, USA',
    payment: 'Visa **** 1234',
    wallet: '$50.00',
    profilePicture: 'https://via.placeholder.com/150'
  });

  const [editOpen, setEditOpen] = useState(false);
  const [editField, setEditField] = useState('');
  const [editValue, setEditValue] = useState('');

  const [selectedTab, setSelectedTab] = useState(0);

  const handleEditOpen = (field) => {
    setEditField(field);
    setEditValue(profile[field]);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleSave = () => {
    setProfile((prevProfile) => ({ ...prevProfile, [editField]: editValue }));
    setEditOpen(false);
  };

  const handleLogout = () => {
    navigate('/');
    console.log('Logged out');
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
      <Box sx={{ marginTop: '24px', textAlign: 'center' }}>
        <Avatar
          src={profile.profilePicture}
          sx={{ width: 150, height: 150, margin: '0 auto 24px' }}
        />
        <Typography variant="h4" gutterBottom>{profile.name}</Typography>
      </Box>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        centered
        sx={{ marginBottom: '24px' }}
      >
        <Tab label="Profile" />
        <Tab label="Address" />
        <Tab label="Payment Details" />
        <Tab label="Wallet" />
      </Tabs>

      <Box sx={{ marginTop: '24px', marginBottom: '80px' }}>
        {selectedTab === 0 && (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Typography variant="h6" sx={{ flex: 1 }}>Name: {profile.name}</Typography>
              <IconButton onClick={() => handleEditOpen('name')}>
                <EditIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Typography variant="h6" sx={{ flex: 1 }}>Email: {profile.email}</Typography>
              <IconButton onClick={() => handleEditOpen('email')}>
                <EditIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Typography variant="h6" sx={{ flex: 1 }}>Phone: {profile.phone}</Typography>
              <IconButton onClick={() => handleEditOpen('phone')}>
                <EditIcon />
              </IconButton>
            </Box>
          </>
        )}
        {selectedTab === 1 && (
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <Typography variant="h6" sx={{ flex: 1 }}>Address: {profile.address}</Typography>
            <IconButton onClick={() => handleEditOpen('address')}>
              <EditIcon />
            </IconButton>
          </Box>
        )}
        {selectedTab === 2 && (
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <Typography variant="h6" sx={{ flex: 1 }}>Payment Details: {profile.payment}</Typography>
            <IconButton onClick={() => handleEditOpen('payment')}>
              <EditIcon />
            </IconButton>
          </Box>
        )}
        {selectedTab === 3 && (
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <Typography variant="h6" sx={{ flex: 1 }}>Wallet: {profile.wallet}</Typography>
            <IconButton onClick={() => handleEditOpen('wallet')}>
              <EditIcon />
            </IconButton>
          </Box>
        )}
      </Box>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{
          position: 'fixed',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '50px',
          padding: '10px 20px',
          backgroundColor: '#63479e',
          '&:hover': {
            backgroundColor: '#52357c',
          },
        }}
      >
        Logout
      </Button>

      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit {editField.charAt(0).toUpperCase() + editField.slice(1)}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label={editField.charAt(0).toUpperCase() + editField.slice(1)}
            type="text"
            fullWidth
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProfilePage;
