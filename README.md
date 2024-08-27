# E-commerce Project

## Overview

This project is an e-commerce application that includes both frontend and backend components. The backend service is built with Node.js and MongoDB, while the frontend is developed using React and Redux.

## Features

### Backend

The backend of this e-commerce project offers comprehensive API functionalities for managing various aspects of the platform. The key features include:

1. **Authentication**
   - **User Registration**: Register new users with their details.
   - **User Authentication**: Authenticate users using JWT tokens.
   - **Token Handling**: Ensure that routes requiring authentication check for valid JWT tokens.
   - **Password Recovery**: Implement a feature for users to recover their passwords.

2. **Orders Management**
   - **Create Order**: Create new orders with detailed order items and customer information.
   - **Update Order Status**: Update the status of existing orders (Pending, Shipped, Delivered, Cancelled).
   - **Retrieve Orders by User**: Get all orders associated with a specific user.
   - **Retrieve All Orders**: Fetch all orders in the system.
   - **Delete Order**: Remove an order by its ID.
   - **Order Number Generation**: Automatically generate unique order numbers with a specific format.

3. **Cart Management**
   - **Add to Cart**: Add items to a user's shopping cart or update existing items, considering discounts.
   - **Remove from Cart**: Remove specific items from the cart or decrease the quantity by one.
   - **Delete Item from Cart**: Completely remove an item from the cart.
   - **Clear Cart**: Remove all items from the cart.
   - **Retrieve Cart Items**: Get all items currently in a user's cart, including updated total prices.
   - **Calculate Total Price**: Automatically calculate the total price based on item quantities and discounts.

4. **Users Management**
   - **Create User**: Register new users.
   - **Authenticate User**: Log in and authenticate users with JWT tokens.
   - **Update User Information**: Modify user details as needed.
   - **Password Recovery**: Implement a password recovery feature for users.

5. **Categories Management**
   - **Create Category**: Add new product categories.
   - **Update Category**: Modify existing categories.
   - **Retrieve Categories**: Get a list of all categories.
   - **Delete Category**: Remove a category.

6. **Products Management**
   - **Create Product**: Add new products to the catalog.
   - **Update Product**: Modify existing product details, including price, description, and category.
   - **Search To Retrieve Products**: Get a list of all products, search by title or description, filter by rating, or fetch paginated results.
   - **Get Products by Category**: Retrieve products that belong to a specific category.
   - **Get Discounted Products**: Fetch products that have active discounts.
   - **Delete Product**: Remove a product from the catalog.  

7. **Wishlist Management**
   - **Add to Wishlist**: Add items to a user's wishlist.
   - **Remove from Wishlist**: Remove items from the wishlist.
   - **Retrieve Wishlist**: Get all items in a user's wishlist.
   - **Clear Wishlist**: Remove all items from the Wishlist.

8. **Reviews Management**
   - **Create Review**: Allow users to post reviews for products.
   - **Update Review**: Modify existing reviews.
   - **Retrieve Reviews**: Fetch reviews for specific products.
   - **Delete Review**: Remove a review.

### Frontend

- **User Interface**: For browsing products, managing a shopping cart, and checking out.
- **Integration**: Integration with the backend API to display orders and handle user interactions.
- **State Management**: Using Redux.

## Setup

### Backend Setup

#### Prerequisites
- Node.js (version 14.x or higher)
- MongoDB (version 4.x or higher)

### Frontend Setup

#### Prerequisites
- Node.js (version 14.x or higher)
- A modern web browser

## API Documentation

### Base URL

The backend API is available at:

- `http://localhost:5000/api/v1/users`
- `http://localhost:5000/api/v1/categories`
- `http://localhost:5000/api/v1/products`
- `http://localhost:5000/api/v1/orders`
- `http://localhost:5000/api/v1/cart`
- `http://localhost:5000/api/v1/reviews`
- `http://localhost:5000/api/v1/wishlist`

## Frontend Components

### Key Features
- **Product Browsing**: View and search for products.
- **Shopping Cart**: Add, update, and remove items in the cart.
- **Checkout**: Place orders and view order status.

## Repository

- [GitHub Repository](https://github.com/doaaabdelfattah/E-commerce-Project)

## Contact

For questions or support, please contact:

- **Alshimaa Mamdouh**: alshimaa.mamdouh.abdelaziz@gmail.com
- **Doaa Abdelfattah**: doaa.abdelfattah@example.com
- **Nada Shaaban**: nada.shaaban@example.com
