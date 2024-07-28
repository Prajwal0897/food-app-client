import React from 'react';
import { Box, Typography } from '@mui/material';

const Category = ({ image, label, selected, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: selected ? '2px solid #1976d2' : '2px solid transparent',
        padding: '8px',
        borderRadius: '8px',
        transition: 'border 0.3s ease',
        '&:hover': {
          border: '2px solid #1976d2',
        }
      }}
    >
      <img src={image} alt={label} style={{ width: '64px', height: '64px' }} />
      <Typography variant="caption" sx={{ mt: 1 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default Category;
