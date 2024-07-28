import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const RestaurantCard = ({ image, name, description, onClick }) => {
  return (
    <Card sx={{ cursor: 'pointer' }} onClick={onClick}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography component="h5" variant="h6">
          {name}
        </Typography>
        <Typography component="p" variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
