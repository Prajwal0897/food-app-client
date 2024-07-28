import React from 'react';
import { Container, Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        // Add your signup logic here
        // If signup is successful, navigate to the login page or main page
        navigate('/signup');
      };

      const handleLogin = (e) =>{
        e.preventDefault()
        navigate('/main')
      }


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: 'background.paper',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Log in to DesiDelights
        </Typography>
        <Box sx={{ mt: 1, width: '100%' }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mb: 2,
              mt: 2,
              bgcolor: '#4285F4',
              '&:hover': { bgcolor: '#357ae8' },
            }}
          >
            Use email
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mb: 2,
              bgcolor: '#3b5998',
              '&:hover': { bgcolor: '#2d4373' },
            }}
          >
            Continue with Facebook
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mb: 2,
              bgcolor: '#000000',
              '&:hover': { bgcolor: '#333333' },
            }}
          >
            Continue with Apple
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mb: 2,
              bgcolor: '#db4a39',
              '&:hover': { bgcolor: '#c23321' },
            }}
          >
            Continue with Google
          </Button>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
          <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
            By continuing, you agree to our Terms of Service to learn how we collect, use, and share your data.
          </Typography>
          <Button fullWidth variant="text" sx={{ mt: 2 }} onClick={handleSignUp}>
            Don't have an account? Sign up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
