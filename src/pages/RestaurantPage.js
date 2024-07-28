import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

const RestaurantPage = () => {
  const { state } = useLocation();
  const { restaurant } = state;

  if (!restaurant) return <div>Loading...</div>;

  return (
    <Container>
      <Box sx={{ marginTop: '24px',width:"100%" }}>
        <Typography variant="h4" gutterBottom>{restaurant.name}</Typography>
        <Typography variant="subtitle1" gutterBottom>{restaurant.description}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '24px',width:"100%" }}>
          {restaurant.menu.map((item, index) => (
            <Card key={index} sx={{ width: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image={restaurant.image} // Replace with item image if available
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                <Typography variant="body1" color="text.primary">{item.price}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default RestaurantPage;
