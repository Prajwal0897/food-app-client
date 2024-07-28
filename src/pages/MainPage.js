import React, { useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import RestaurantCard from '../components/RestaurantCard';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const initialCategories = [
    { label: 'All', image: 'https://cdn.usegalileo.ai/stability/76f1dcd3-e78d-47ff-a5a1-bbb490368064.png', selected: true },
    { label: 'Pasta', image: 'https://cdn.usegalileo.ai/stability/d824b460-f6e3-4c20-90b7-1252cb10167b.png', selected: false },
    { label: 'Burgers', image: 'https://cdn.usegalileo.ai/stability/72d19147-9e1d-4e0c-9c60-acd84437fc27.png', selected: false },
    { label: 'Pizza', image: 'https://cdn.usegalileo.ai/stability/864a4ec5-f0bf-450d-992a-fa26499b2a68.png', selected: false },
    { label: 'Salads', image: 'https://cdn.usegalileo.ai/stability/9d2b3f02-ad3b-4500-81e3-b6eca4964b32.png', selected: false },
    { label: 'Sushi', image: 'https://cdn.usegalileo.ai/stability/78d6feec-b1a5-4a49-be4a-a5f261e8642b.png', selected: false }
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const restaurants = [
    {
      id: 1,
      name: 'The Chicken Guys',
      description: 'Chicken, Mediterranean · 20-30 min · $2.49 Delivery Fee',
      image: 'https://cdn.usegalileo.ai/stability/28525b36-6e1c-4e03-bb1f-2271677e0553.png',
      category: 'Mediterranean',
      menu: [
        { name: 'Chicken Gyro', price: '$8.99', description: 'Grilled chicken with gyro bread' },
        { name: 'Falafel Platter', price: '$7.99', description: 'Served with hummus and pita bread' },
        { name: 'Hummus Plate', price: '$5.99', description: 'Creamy hummus served with pita bread' },
        { name: 'Chicken Shawarma', price: '$9.99', description: 'Sliced chicken with tahini sauce' },
        { name: 'Lamb Kebab', price: '$12.99', description: 'Grilled lamb skewers' },
        { name: 'Tabbouleh Salad', price: '$4.99', description: 'Parsley, bulgur, and tomatoes' },
        { name: 'Baklava', price: '$3.99', description: 'Sweet pastry with nuts and honey' },
        { name: 'Stuffed Grape Leaves', price: '$6.99', description: 'Grape leaves stuffed with rice' },
        { name: 'Fattoush Salad', price: '$5.99', description: 'Salad with toasted bread' },
        { name: 'Baba Ganoush', price: '$6.99', description: 'Roasted eggplant dip' },
      ]
    },
    {
      id: 2,
      name: 'Nobu',
      description: 'Japanese, Sushi · 15-25 min · Free Delivery',
      image: 'https://cdn.usegalileo.ai/stability/78d6feec-b1a5-4a49-be4a-a5f261e8642b.png',
      category: 'Sushi',
      menu: [
        { name: 'Sushi Platter', price: '$15.99', description: 'Assorted sushi with soy sauce' },
        { name: 'Tempura', price: '$12.99', description: 'Crispy tempura shrimp and vegetables' },
        { name: 'Miso Soup', price: '$3.99', description: 'Traditional Japanese soup with tofu' },
        { name: 'Sashimi Deluxe', price: '$18.99', description: 'Assorted sashimi with wasabi' },
        { name: 'Edamame', price: '$4.99', description: 'Steamed soybeans with sea salt' },
        { name: 'Spicy Tuna Roll', price: '$7.99', description: 'Tuna roll with spicy mayo' },
        { name: 'Dragon Roll', price: '$9.99', description: 'Eel and avocado roll' },
        { name: 'California Roll', price: '$6.99', description: 'Crab and avocado roll' },
        { name: 'Nigiri Platter', price: '$14.99', description: 'Assorted nigiri sushi' },
        { name: 'Green Tea Ice Cream', price: '$3.99', description: 'Green tea flavored ice cream' },
      ]
    },
    {
      id: 3,
      name: 'Krispy Krunchy Chicken',
      description: 'Chicken, Southern · 10-20 min · $1.99 Delivery Fee',
      image: 'https://cdn.usegalileo.ai/stability/21ecbdb7-8801-462f-8c00-c6dbe71dd4df.png',
      category: 'Chicken',
      menu: [
        { name: 'Fried Chicken', price: '$10.99', description: 'Crispy fried chicken pieces' },
        { name: 'Chicken Sandwich', price: '$7.99', description: 'Southern style fried chicken sandwich' },
        { name: 'Biscuits', price: '$2.99', description: 'Buttery Southern style biscuits' },
        { name: 'Chicken Tenders', price: '$8.99', description: 'Crispy chicken tenders' },
        { name: 'Coleslaw', price: '$2.99', description: 'Creamy coleslaw' },
        { name: 'Mac and Cheese', price: '$4.99', description: 'Cheesy macaroni' },
        { name: 'Mashed Potatoes', price: '$3.99', description: 'Creamy mashed potatoes with gravy' },
        { name: 'Cornbread', price: '$2.99', description: 'Sweet and savory cornbread' },
        { name: 'Chicken Wings', price: '$9.99', description: 'Spicy chicken wings' },
        { name: 'Peach Cobbler', price: '$4.99', description: 'Sweet peach dessert' },
      ]
    },
    {
      id: 4,
      name: 'Shake Shack',
      description: 'American, Burgers · 15-25 min · $0.99 Delivery Fee',
      image: 'https://cdn.usegalileo.ai/stability/20b01723-8e3c-4ba4-9542-462e6d0311b6.png',
      category: 'Burgers',
      menu: [
        { name: 'Cheeseburger', price: '$9.99', description: 'Juicy beef patty with cheese' },
        { name: 'Shack Fries', price: '$4.99', description: 'Crispy crinkle-cut fries' },
        { name: 'Shack Shake', price: '$5.99', description: 'Creamy milkshake with choice of flavor' },
        { name: 'Veggie Burger', price: '$8.99', description: 'Vegetarian patty with lettuce and tomato' },
        { name: 'Bacon Cheese Fries', price: '$6.99', description: 'Fries topped with cheese and bacon' },
        { name: 'Grilled Cheese', price: '$4.99', description: 'Melted cheese sandwich' },
        { name: 'Hot Dog', price: '$3.99', description: 'Classic beef hot dog' },
        { name: 'Mushroom Burger', price: '$9.99', description: 'Portobello mushroom with cheese' },
        { name: 'Chicken Bites', price: '$7.99', description: 'Breaded chicken bites' },
        { name: 'Vanilla Shake', price: '$5.99', description: 'Classic vanilla milkshake' },
      ]
    },
    {
      id: 5,
      name: 'Pizza Hut',
      description: 'Pizza, Italian · 20-30 min · $3.49 Delivery Fee',
      image: 'https://cdn.usegalileo.ai/stability/864a4ec5-f0bf-450d-992a-fa26499b2a68.png',
      category: 'Pizza',
      menu: [
        { name: 'Pepperoni Pizza', price: '$11.99', description: 'Classic pepperoni pizza' },
        { name: 'Veggie Supreme', price: '$12.99', description: 'Vegetarian pizza with assorted veggies' },
        { name: 'Cheese Pizza', price: '$9.99', description: 'Cheesy delight pizza' },
        { name: 'BBQ Chicken Pizza', price: '$13.99', description: 'Pizza with BBQ chicken' },
        { name: 'Margherita Pizza', price: '$10.99', description: 'Tomato, basil, and cheese pizza' },
        { name: 'Hawaiian Pizza', price: '$12.99', description: 'Ham and pineapple pizza' },
        { name: 'Meat Lover\'s Pizza', price: '$14.99', description: 'Pizza loaded with various meats' },
        { name: 'Supreme Pizza', price: '$15.99', description: 'Pizza with various toppings' },
        { name: 'Garlic Bread', price: '$4.99', description: 'Bread with garlic and cheese' },
        { name: 'Cinnamon Sticks', price: '$5.99', description: 'Sweet cinnamon sticks' },
      ]
    },
    {
      id: 6,
      name: 'Olive Garden',
      description: 'Italian, Pasta · 25-35 min · $2.99 Delivery Fee',
      image: 'https://cdn.usegalileo.ai/stability/d824b460-f6e3-4c20-90b7-1252cb10167b.png',
      category: 'Pasta',
      menu: [
        { name: 'Spaghetti Carbonara', price: '$13.99', description: 'Spaghetti with creamy carbonara sauce' },
        { name: 'Fettuccine Alfredo', price: '$12.99', description: 'Pasta with creamy Alfredo sauce' },
        { name: 'Lasagna', price: '$14.99', description: 'Layered pasta with meat and cheese' },
        { name: 'Penne Arrabbiata', price: '$11.99', description: 'Pasta with spicy tomato sauce' },
        { name: 'Chicken Parmigiana', price: '$15.99', description: 'Breaded chicken with marinara sauce' },
        { name: 'Shrimp Scampi', price: '$16.99', description: 'Pasta with shrimp in garlic sauce' },
        { name: 'Stuffed Shells', price: '$13.99', description: 'Pasta shells stuffed with cheese' },
        { name: 'Ravioli', price: '$14.99', description: 'Stuffed pasta with marinara sauce' },
        { name: 'Bruschetta', price: '$6.99', description: 'Toasted bread with tomato and basil' },
        { name: 'Tiramisu', price: '$5.99', description: 'Italian dessert with coffee and mascarpone' },
      ]
    },
    {
      id: 7,
      name: 'Subway',
      description: 'Sandwiches, Healthy · 10-15 min · $1.99 Delivery Fee',
      image: 'https://cdn.usegalileo.ai/stability/21ecbdb7-8801-462f-8c00-c6dbe71dd4df.png',
      category: 'Sandwiches',
      menu: [
        { name: 'Turkey Sub', price: '$7.99', description: 'Turkey sandwich with fresh veggies' },
        { name: 'Veggie Delight', price: '$6.99', description: 'Vegetarian sandwich with assorted veggies' },
        { name: 'Italian BMT', price: '$8.99', description: 'Sandwich with Italian meats and cheese' },
        { name: 'Chicken Bacon Ranch', price: '$9.99', description: 'Chicken sandwich with bacon and ranch' },
        { name: 'Tuna Sub', price: '$7.99', description: 'Tuna sandwich with fresh veggies' },
        { name: 'Meatball Marinara', price: '$8.99', description: 'Meatball sandwich with marinara sauce' },
        { name: 'Spicy Italian', price: '$8.99', description: 'Sandwich with spicy Italian meats' },
        { name: 'Ham and Cheese', price: '$6.99', description: 'Ham sandwich with cheese' },
        { name: 'Steak and Cheese', price: '$9.99', description: 'Steak sandwich with cheese' },
        { name: 'Subway Club', price: '$8.99', description: 'Sandwich with turkey, ham, and roast beef' },
      ]
    },
    {
      id: 8,
      name: 'Starbucks',
      description: 'Cafe, Beverages · 5-10 min · $0.99 Delivery Fee',
      image: 'https://cdn.usegalileo.ai/stability/72d19147-9e1d-4e0c-9c60-acd84437fc27.png',
      category: 'Cafe',
      menu: [
        { name: 'Caramel Macchiato', price: '$4.99', description: 'Espresso with caramel and milk' },
        { name: 'Mocha Frappuccino', price: '$5.99', description: 'Blended coffee with chocolate' },
        { name: 'Latte', price: '$4.49', description: 'Espresso with steamed milk' },
        { name: 'Cappuccino', price: '$4.49', description: 'Espresso with foamed milk' },
        { name: 'Cold Brew', price: '$3.99', description: 'Cold brewed coffee' },
        { name: 'Iced Coffee', price: '$2.99', description: 'Chilled coffee with ice' },
        { name: 'Pumpkin Spice Latte', price: '$5.49', description: 'Seasonal spiced latte' },
        { name: 'Chai Tea Latte', price: '$4.99', description: 'Spiced tea with steamed milk' },
        { name: 'Blueberry Muffin', price: '$2.99', description: 'Muffin with blueberries' },
        { name: 'Croissant', price: '$2.49', description: 'Flaky buttery pastry' },
      ]
    },
    {
      id: 9,
      name: 'Panda Express',
      description: 'Chinese, Fast Food · 15-20 min · $1.99 Delivery Fee',
      image: 'https://cdn.usegalileo.ai/stability/78d6feec-b1a5-4a49-be4a-a5f261e8642b.png',
      category: 'Chinese',
      menu: [
        { name: 'Orange Chicken', price: '$9.99', description: 'Crispy chicken with orange sauce' },
        { name: 'Kung Pao Chicken', price: '$10.99', description: 'Spicy chicken with peanuts' },
        { name: 'Beef and Broccoli', price: '$11.99', description: 'Beef with broccoli in a savory sauce' },
        { name: 'Fried Rice', price: '$4.99', description: 'Rice stir-fried with vegetables' },
        { name: 'Chow Mein', price: '$5.99', description: 'Stir-fried noodles with vegetables' },
        { name: 'Egg Rolls', price: '$3.99', description: 'Crispy rolls with vegetables' },
        { name: 'Sweet and Sour Pork', price: '$10.99', description: 'Pork with sweet and sour sauce' },
        { name: 'Sesame Chicken', price: '$9.99', description: 'Chicken with sesame sauce' },
        { name: 'Spring Rolls', price: '$4.99', description: 'Crispy rolls with vegetables' },
        { name: 'Hot and Sour Soup', price: '$3.99', description: 'Spicy and sour soup' },
      ]
    },
    {
      id: 10,
      name: 'Taco Bell',
      description: 'Mexican, Fast Food · 10-15 min · $1.49 Delivery Fee',
      image: 'https://cdn.usegalileo.ai/stability/21ecbdb7-8801-462f-8c00-c6dbe71dd4df.png',
      category: 'Mexican',
      menu: [
        { name: 'Crunchy Taco', price: '$2.99', description: 'Crispy taco with beef' },
        { name: 'Burrito Supreme', price: '$5.99', description: 'Burrito with beef and beans' },
        { name: 'Quesadilla', price: '$4.99', description: 'Grilled tortilla with cheese' },
        { name: 'Nachos', price: '$3.99', description: 'Tortilla chips with cheese' },
        { name: 'Mexican Pizza', price: '$6.99', description: 'Pizza with Mexican toppings' },
        { name: 'Soft Taco', price: '$2.99', description: 'Soft tortilla with beef' },
        { name: 'Chicken Chalupa', price: '$3.99', description: 'Fried flatbread with chicken' },
        { name: 'Cinnamon Twists', price: '$1.99', description: 'Crispy sweet twists' },
        { name: 'Beefy 5-Layer Burrito', price: '$4.99', description: 'Burrito with beef and cheese' },
        { name: 'Fiesta Taco Salad', price: '$5.99', description: 'Salad with taco toppings' },
      ]
    }
  ];

  const handleCategoryClick = (selectedLabel) => {
    setCategories(categories.map(category => ({
      ...category,
      selected: category.label === selectedLabel
    })));
    setSelectedCategory(selectedLabel);
  };

  const filteredRestaurants = selectedCategory === 'All'
    ? restaurants
    : restaurants.filter(restaurant => restaurant.category === selectedCategory);

  const handleRestaurantClick = (restaurant) => {
    navigate(`/restaurant/${restaurant.id}`, { state: { restaurant } });
  };

  return (
    <Box sx={{ backgroundColor: '#f9f8fc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container>
        <Typography variant="h5" sx={{ margin: '16px 0' }}>
          Delicious categories
        </Typography>
        <Box sx={{ display: 'flex', overflowX: 'auto', padding: '16px 0', gap: '32px' }}>
          {categories.map((category, index) => (
            <Category
              key={index}
              image={category.image}
              label={category.label}
              selected={category.selected}
              onClick={() => handleCategoryClick(category.label)}
            />
          ))}
        </Box>
        <Typography variant="h5" sx={{ margin: '16px 0' }}>
          Restaurants
        </Typography>
        <Grid container spacing={2}>
          {filteredRestaurants.map((restaurant, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <RestaurantCard
                image={restaurant.image}
                name={restaurant.name}
                description={restaurant.description}
                onClick={() => handleRestaurantClick(restaurant)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MainPage;
