import React, { useState } from 'react';
import { Box, Container, Typography, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Add search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <Container>
      <Box sx={{ marginTop: '24px' }}>
        <Typography variant="h4" gutterBottom>Search</Typography>
        <Typography variant="body1" gutterBottom>
          Use the search bar below to find your favorite restaurants or dishes. Simply type in a keyword and hit the search button.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
          <TextField
            variant="outlined"
            placeholder="Search for restaurants or dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
          />
          <IconButton color="primary" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Box>
        {/* Add search results display here */}
      </Box>
    </Container>
  );
};

export default SearchPage;
