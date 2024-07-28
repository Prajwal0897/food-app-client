import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RestaurantPage from './pages/RestaurantPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SearchPage from './pages/SearchPage';
import OrdersPage from './pages/OrdersPage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout';

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/main"
          element={
            <Layout>
              <MainPage setSelectedRestaurant={setSelectedRestaurant} />
            </Layout>
          }
        />
        <Route
          path="/restaurant/:id"
          element={
            <Layout>
              <RestaurantPage restaurants={selectedRestaurant ? [selectedRestaurant] : []} />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <SearchPage />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <OrdersPage />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <ProfilePage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
