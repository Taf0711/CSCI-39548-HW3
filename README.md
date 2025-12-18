# Restaurant Web Application - Full Stack

A modern full-stack restaurant web application with React + TypeScript frontend and Node.js + Express + MongoDB backend.

## 🚀 Features

- **Menu Management**: Menu items stored and retrieved from MongoDB database
- **Order Processing**: Complete order submission and tracking system
- **Shopping Cart**: Add items to cart with quantity management
- **Data Persistence**: All cart and order data persisted to database
- **REST API**: Full RESTful API for menu and order operations
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Type Safety**: Full TypeScript support on both frontend and backend

## 📁 Project Structure

```
CSCI-39548-HW3/
├── backend/                # Node.js + Express + TypeScript backend
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── models/        # MongoDB/Mongoose models
│   │   ├── controllers/   # Request handlers
│   │   ├── routes/        # API routes
│   │   ├── server.ts      # Main server file
│   │   └── seed.ts        # Database seeding script
│   ├── package.json
│   └── tsconfig.json
│
└── src/                   # React + TypeScript frontend
    ├── components/        # Reusable UI components
    ├── context/          # React Context (Cart management)
    ├── pages/            # Page components
    ├── services/         # API service layer
    ├── types/            # TypeScript type definitions
    └── App.tsx
```

## 🛠️ Prerequisites

Before running this application, make sure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Either:
  - Local MongoDB installation - [Download](https://www.mongodb.com/try/download/community)
  - OR MongoDB Atlas account (free) - [Sign up](https://www.mongodb.com/cloud/atlas)

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
cd CSCI-39548-HW3
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
MONGODB_URI=mongodb://localhost:27017/restaurant-db
PORT=5000
NODE_ENV=development
EOF
```

**Note**: If using MongoDB Atlas, replace the `MONGODB_URI` with your Atlas connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/restaurant-db
```

### 3. Start MongoDB (if using local installation)

```bash
# macOS (if installed via Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
# Start MongoDB from Services or run mongod.exe
```

### 4. Seed the Database

```bash
# Still in backend directory
npm run seed
```

You should see output confirming the menu items were seeded successfully.

### 5. Start the Backend Server

```bash
# In backend directory
npm run dev
```

The backend will run on `http://localhost:5000`

### 6. Frontend Setup

Open a new terminal window:

```bash
# Navigate to project root (if not already there)
cd CSCI-39548-HW3

# Install frontend dependencies
npm install

# Create .env file for frontend
cat > .env << EOF
VITE_API_URL=http://localhost:5000/api
EOF

# Start the frontend development server
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is in use)

## 🚀 Running the Application

1. **Start MongoDB** (if using local installation)
2. **Start Backend**: `cd backend && npm run dev`
3. **Start Frontend**: (in project root) `npm run dev`
4. **Open Browser**: Navigate to `http://localhost:5173`

## 📡 API Endpoints

### Menu Endpoints

- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get single menu item
- `GET /api/menu/category/:category` - Get items by category
- `POST /api/menu` - Create new menu item
- `PUT /api/menu/:id` - Update menu item
- `DELETE /api/menu/:id` - Delete menu item

### Order Endpoints

- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id` - Update order status

### Health Check

- `GET /api/health` - Check API status

## 🎯 How It Works

### Menu Display
1. Frontend calls `GET /api/menu` on page load
2. Backend fetches menu items from MongoDB
3. Items are displayed in the Menu page grouped by category

### Adding to Cart
1. User clicks "Add to Cart" on a menu item
2. Item is added to React Context state
3. Cart state is persisted to localStorage

### Placing an Order
1. User clicks "Checkout" in the cart
2. Frontend calls `POST /api/orders` with cart items
3. Backend validates items against database
4. Order is saved to MongoDB with total price and timestamp
5. Success message displayed and cart is cleared

## 🧪 Testing the Application

1. **View Menu**: Navigate to the Menu page to see items loaded from database
2. **Add to Cart**: Click "Add to Cart" on various items
3. **Manage Cart**: Open cart, adjust quantities, remove items
4. **Place Order**: Click "Checkout" to submit order to database
5. **Verify Order**: Check MongoDB or backend logs to confirm order was saved

## 🗄️ Database Schema

### MenuItem Collection
```typescript
{
  name: string
  description: string
  price: number
  image: string
  category: 'Curries' | 'Rice & Biryani'
  createdAt: Date
  updatedAt: Date
}
```

### Order Collection
```typescript
{
  items: [{
    menuItem: ObjectId (ref: MenuItem)
    name: string
    price: number
    quantity: number
  }]
  totalPrice: number
  status: 'pending' | 'confirmed' | 'preparing' | 'completed' | 'cancelled'
  customerInfo: {
    name?: string
    email?: string
    phone?: string
  }
  createdAt: Date
  updatedAt: Date
}
```

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📝 Available Scripts

### Frontend (Project Root)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run seed` - Seed database with menu items

## 🐛 Troubleshooting

### Backend won't start
- Ensure MongoDB is running
- Check if port 5000 is available
- Verify `.env` file exists with correct `MONGODB_URI`

### Frontend can't connect to backend
- Ensure backend is running on port 5000
- Check `.env` file has `VITE_API_URL=http://localhost:5000/api`
- Check browser console for CORS errors

### Menu items not loading
- Run `npm run seed` in backend directory
- Check MongoDB connection in backend logs
- Verify database name matches in connection string

### Orders not saving
- Check backend console for errors
- Ensure menu items exist in database (run seed script)
- Verify MongoDB connection is active

## 📄 License

MIT

## 👨‍💻 Author

CSCI-39548 Student
