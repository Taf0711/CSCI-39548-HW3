# How to Run This Application 🚀

## Prerequisites Checklist

Before starting, ensure you have:
- [ ] Node.js installed (v18 or higher) - Check with `node --version`
- [ ] npm installed - Check with `npm --version`
- [ ] MongoDB Atlas account (free) OR local MongoDB installed

## Option A: Using MongoDB Atlas (Recommended - No Local Setup Required)

### Step 1: Create MongoDB Atlas Account (5 minutes)

1. Visit https://www.mongodb.com/cloud/atlas/register
2. Sign up for a free account
3. Create a **free M0 cluster** (when prompted, select AWS, any region)
4. Wait 1-3 minutes for cluster to deploy

### Step 2: Configure Database Access

1. In Atlas dashboard, click **"Database Access"** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication method
4. Create a username (e.g., `restaurantapp`) and strong password
5. Set user privileges to **"Atlas Admin"**
6. Click **"Add User"**

### Step 3: Configure Network Access

1. Click **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (adds 0.0.0.0/0)
4. Click **"Confirm"**

### Step 4: Get Your Connection String

1. Go back to **"Database"** (left sidebar)
2. Click **"Connect"** button on your cluster
3. Select **"Drivers"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://restaurantapp:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password

### Step 5: Configure Backend

```bash
# Navigate to backend directory
cd backend

# Create .env file
cat > .env << 'EOF'
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/restaurant-db?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
EOF
```

**Important:** Replace the MONGODB_URI with your actual connection string from Step 4!

### Step 6: Install Backend Dependencies

```bash
# Still in backend directory
npm install
```

### Step 7: Seed the Database

```bash
npm run seed
```

You should see output like:
```
MongoDB Connected: cluster0-shard-00-01.xxxxx.mongodb.net
Clearing existing menu items...
Seeding menu items...
Successfully seeded 6 menu items:
- Butter Chicken Rendang (Curries)
- Lamb Rogan Josh (Curries)
- Paneer Tikka (Curries)
- Chicken Biryani (Rice & Biryani)
- Nasi Goreng (Rice & Biryani)
- Lamb Biryani (Rice & Biryani)

Database seeding completed!
```

### Step 8: Start Backend Server

```bash
npm run dev
```

Keep this terminal window open! You should see:
```
Server is running on port 5000
Environment: development
MongoDB Connected: cluster0.xxxxx.mongodb.net
```

### Step 9: Configure Frontend

Open a **NEW terminal window** (keep backend running in the first one):

```bash
# Navigate to project root
cd /Users/tafseerhaque/Documents/CSCI-39548-HW3

# Create frontend .env file
cat > .env << 'EOF'
VITE_API_URL=http://localhost:5000/api
EOF
```

### Step 10: Install Frontend Dependencies

```bash
npm install
```

### Step 11: Start Frontend

```bash
npm run dev
```

You should see:
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 12: Test the Application! 🎉

1. Open your browser to **http://localhost:5173**
2. Click on **"Menu"** in the navigation
3. You should see 6 menu items loaded from MongoDB Atlas
4. Click **"Add to Cart"** on a few items
5. Click the **cart icon** in the header
6. Adjust quantities if desired
7. Click **"Checkout"**
8. You should see **"Order Placed Successfully!"**

### Step 13: Verify in MongoDB Atlas

1. Go back to MongoDB Atlas
2. Click **"Browse Collections"**
3. You should see:
   - **menuitems** collection with 6 documents
   - **orders** collection with your test order(s)

---

## Option B: Using Local MongoDB

### Prerequisites
- MongoDB installed locally

### Step 1: Start MongoDB

**macOS:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

**Windows:**
- Start MongoDB from Services or run `mongod.exe`

### Step 2: Configure Backend

```bash
cd backend

# Create .env file with local MongoDB
cat > .env << 'EOF'
MONGODB_URI=mongodb://localhost:27017/restaurant-db
PORT=5000
NODE_ENV=development
EOF

# Install dependencies
npm install

# Seed database
npm run seed

# Start backend
npm run dev
```

### Step 3: Follow Steps 9-13 from Option A

---

## Quick Commands Reference

```bash
# Backend (in /backend directory)
npm install          # Install dependencies
npm run seed         # Seed database
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Frontend (in project root)
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

## Troubleshooting

### "Cannot connect to MongoDB"
- **Atlas:** Check your connection string in `backend/.env`
- **Atlas:** Ensure password in connection string doesn't have special characters (or URL encode them)
- **Atlas:** Verify Network Access allows 0.0.0.0/0
- **Local:** Ensure MongoDB service is running

### "Menu items not loading"
- Check backend terminal - is it running?
- Check backend logs for errors
- Ensure you ran `npm run seed` in backend
- Verify CORS is working (check browser console)

### "Port already in use"
- Backend: Change `PORT=5000` to another port in `backend/.env`
- Frontend: Vite will automatically use next available port

### "Network Error" in browser
- Ensure backend is running on port 5000
- Check `VITE_API_URL` in frontend `.env`
- Check browser console for specific error

## Success Indicators ✅

You'll know everything is working when:
- ✅ Backend shows "MongoDB Connected" message
- ✅ Frontend loads without errors
- ✅ Menu page displays 6 items with images
- ✅ Cart adds/removes items correctly
- ✅ Checkout shows success message
- ✅ Orders appear in MongoDB database

## Next Steps

Once running locally:
1. Review the code structure
2. Test all features thoroughly
3. Deploy to production (see DEPLOYMENT.md)
4. Submit your hosted application URL

---

**Need Help?** Check these files:
- `README.md` - Full project documentation
- `DEPLOYMENT.md` - Production deployment guide
- `PROJECT_SUMMARY.md` - Technical overview

**Estimated Setup Time:** 10-15 minutes

