# Deployment Guide - Restaurant Application

This guide will help you deploy the full-stack restaurant application.

## 🗄️ MongoDB Setup Options

You have two options for MongoDB:

### Option 1: MongoDB Atlas (Recommended - Free Cloud Database)

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account
   - Create a new cluster (M0 Free tier)

2. **Setup Database Access**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Enter username and password (save these!)
   - Grant "Read and write to any database" privileges

3. **Setup Network Access**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Confirm

4. **Get Connection String**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
   - Replace `<password>` with your actual password

5. **Update Backend .env**
   ```bash
   cd backend
   nano .env  # or use any text editor
   ```
   
   Update the MONGODB_URI:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/restaurant-db?retryWrites=true&w=majority
   PORT=5000
   NODE_ENV=development
   ```

### Option 2: Local MongoDB Installation

1. **Install MongoDB**
   
   **macOS:**
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb-community
   ```
   
   **Linux (Ubuntu/Debian):**
   ```bash
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   sudo apt-get update
   sudo apt-get install -y mongodb-org
   sudo systemctl start mongod
   ```
   
   **Windows:**
   - Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - Run installer
   - Start MongoDB as a service

2. **Verify MongoDB is Running**
   ```bash
   mongosh  # Should connect to mongodb://localhost:27017
   ```

3. **Backend .env remains default**
   ```
   MONGODB_URI=mongodb://localhost:27017/restaurant-db
   PORT=5000
   NODE_ENV=development
   ```

## 🚀 Running the Application Locally

### 1. Backend Setup

```bash
cd backend

# Install dependencies (if not done already)
npm install

# Seed the database
npm run seed

# Start backend server
npm run dev
```

You should see:
```
Server is running on port 5000
MongoDB Connected: cluster0-shard-00-01.xxxxx.mongodb.net
```

### 2. Frontend Setup

Open a new terminal:

```bash
# Navigate to project root
cd /Users/tafseerhaque/Documents/CSCI-39548-HW3

# Install dependencies (if not done already)
npm install

# Start frontend
npm run dev
```

Frontend will be available at `http://localhost:5173`

## 🌐 Deploying to Production

### Backend Deployment (Render.com - Free)

1. **Create Render Account**
   - Go to [Render.com](https://render.com)
   - Sign up for free

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `restaurant-backend`
     - **Root Directory**: `backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Instance Type**: Free

3. **Add Environment Variables**
   - Add `MONGODB_URI` with your Atlas connection string
   - Add `PORT` with value `5000`
   - Add `NODE_ENV` with value `production`

4. **Deploy**
   - Click "Create Web Service"
   - Copy the deployed URL (e.g., `https://restaurant-backend.onrender.com`)

### Frontend Deployment (Netlify - Free)

1. **Update Frontend .env**
   ```
   VITE_API_URL=https://restaurant-backend.onrender.com/api
   ```

2. **Build Frontend**
   ```bash
   npm run build
   ```

3. **Deploy to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder
   - OR connect GitHub and auto-deploy

4. **Configure Environment Variables** (in Netlify)
   - Go to Site Settings → Environment Variables
   - Add `VITE_API_URL` with your backend URL

### Alternative: Deploy Both to Vercel

**Backend:**
- Add `vercel.json` to backend directory:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/server.js"
    }
  ]
}
```

**Frontend:**
- Connect repository to Vercel
- Set root directory to project root
- Deploy

## ✅ Verification Checklist

- [ ] MongoDB is running (local) or Atlas is configured
- [ ] Backend .env file is configured correctly
- [ ] Backend dependencies installed (`npm install` in backend/)
- [ ] Database seeded (`npm run seed` in backend/)
- [ ] Backend server running (`npm run dev` in backend/)
- [ ] Frontend .env file has correct API URL
- [ ] Frontend dependencies installed (`npm install` in root)
- [ ] Frontend running (`npm run dev` in root)
- [ ] Can view menu items (loaded from database)
- [ ] Can add items to cart
- [ ] Can place order successfully

## 🐛 Common Issues

### "Cannot connect to MongoDB"
- Verify MongoDB is running locally OR
- Check Atlas connection string is correct
- Ensure IP is whitelisted in Atlas (0.0.0.0/0 for testing)

### "Network Error" in frontend
- Ensure backend is running on port 5000
- Check VITE_API_URL in frontend .env
- Verify CORS is enabled in backend

### "Menu items not loading"
- Run seed script: `npm run seed` in backend
- Check backend console for errors
- Verify database connection in backend logs

## 📧 Support

If you encounter issues:
1. Check the browser console for errors
2. Check the backend terminal for errors
3. Verify all environment variables are set correctly
4. Ensure both servers are running

## 🎉 Success!

Once everything is running:
1. Open `http://localhost:5173`
2. Navigate to the Menu page
3. Add items to cart
4. Click checkout to place an order
5. Check your MongoDB database to see the order saved!

---

**Submission Link**: Once deployed, submit the live URL (e.g., your Netlify/Vercel frontend URL)

