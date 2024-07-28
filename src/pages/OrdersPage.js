import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const OrdersPage = () => {
  return (
    <Container>
      <Box sx={{ marginTop: '24px' }}>
        <Typography variant="h4" gutterBottom>Your Orders</Typography>
        {/* Add order listing here */}
      </Box>
    </Container>
  );
};

export default OrdersPage;
