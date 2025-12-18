# Restaurant Backend API

Backend API for the restaurant web application built with Node.js, Express, TypeScript, and MongoDB.

## Features

- **Menu Management**: CRUD operations for menu items
- **Order Processing**: Create and manage customer orders
- **Database Persistence**: All data stored in MongoDB
- **REST API**: RESTful endpoints for frontend integration

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/restaurant-db
   PORT=5000
   NODE_ENV=development
   ```

3. **Start MongoDB** (if using local MongoDB):
   ```bash
   mongod
   ```

4. **Seed the database**:
   ```bash
   npm run seed
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`

## API Endpoints

### Menu Items

- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get single menu item
- `GET /api/menu/category/:category` - Get menu items by category
- `POST /api/menu` - Create new menu item
- `PUT /api/menu/:id` - Update menu item
- `DELETE /api/menu/:id` - Delete menu item

### Orders

- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id` - Update order status

### Health Check

- `GET /api/health` - Check API status

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run seed` - Seed database with menu items

## Technologies

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

