import React from "react";
import Navbar from "../components/Navbar";
import { Box, Container } from "@mui/material";
import './bannerStyles.css';

const Layout = ({ children }) => {
  return (
    <Container maxWidth="xl">
        <div className="banner">
        <h1>Foodie Haven</h1>
      </div>
      <Navbar />
      
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Box sx={{ flex: 1 }}>{children}</Box>
      </Box>
    </Container>
  );
};

export default Layout;
