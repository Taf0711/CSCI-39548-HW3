# Quick Start Guide 🚀

## Step 1: Setup MongoDB Atlas (5 minutes)

Since MongoDB is not installed locally, we'll use MongoDB Atlas (free cloud database):

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up for a free account
3. Create a free M0 cluster
4. Under "Database Access" → Add a database user with a password
5. Under "Network Access" → Add IP Address → "Allow Access from Anywhere"
6. Click "Connect" → "Connect your application" → Copy the connection string

## Step 2: Configure Backend

```bash
cd backend

# Create .env file with your Atlas connection string
# Replace <username>, <password>, and cluster address with your actual values
echo 'MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/restaurant-db?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development' > .env

# Install dependencies
npm install

# Seed the database
npm run seed

# Start backend (keep this terminal open)
npm run dev
```

## Step 3: Configure & Start Frontend

Open a NEW terminal:

```bash
# Go to project root
cd /Users/tafseerhaque/Documents/CSCI-39548-HW3

# Make sure .env exists
echo 'VITE_API_URL=http://localhost:5000/api' > .env

# Install dependencies (if not done)
npm install

# Start frontend
npm run dev
```

## Step 4: Test the Application

1. Open browser to `http://localhost:5173`
2. Go to Menu page - items should load from MongoDB
3. Add items to cart
4. Click cart icon and checkout
5. Order should be saved to database!

## Verify Database

Go to MongoDB Atlas → Browse Collections → You should see:
- `menuitems` collection with 6 items
- `orders` collection with your test orders

## 🎉 Done!

Your full-stack application is now running with:
- React frontend on port 5173
- Express backend on port 5000
- MongoDB Atlas (cloud database)

---

## Alternative: Use Mock MongoDB (For Testing Without Atlas)

If you want to test without setting up MongoDB Atlas, you can use Mongo Memory Server:

```bash
cd backend
npm install mongodb-memory-server --save-dev
```

Then update `backend/src/config/database.ts` to use memory server for development.

