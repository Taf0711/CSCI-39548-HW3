# Vercel Deployment Guide

## Frontend Deployment (This Repository)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Update restaurant design and add full-stack functionality"
git push origin main
```

### Step 2: Deploy Frontend to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **Environment Variables** (Important!):
   - Click "Environment Variables"
   - Add: `VITE_API_URL` = `YOUR_BACKEND_URL/api`
   - (You'll update this after deploying the backend)

6. Click "Deploy"

### Step 3: Deploy Backend to Render/Railway

Since Vercel has limitations with long-running Node.js servers, deploy the backend separately:

#### Option A: Render.com (Recommended)

1. Go to [Render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `restaurant-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

5. **Environment Variables**:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `PORT`: `5000`
   - `NODE_ENV`: `production`

6. Click "Create Web Service"
7. Copy the deployed URL (e.g., `https://restaurant-backend.onrender.com`)

#### Option B: Railway.app

1. Go to [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Configure:
   - **Root Directory**: `backend`
   - Add environment variables (same as above)

### Step 4: Update Frontend Environment Variable

1. Go back to Vercel Dashboard
2. Go to your project → Settings → Environment Variables
3. Update `VITE_API_URL` to: `https://your-backend-url.onrender.com/api`
4. Redeploy: Go to Deployments → Click "..." → "Redeploy"

### Step 5: Seed the Production Database

```bash
# Update backend/.env with production MongoDB URI
cd backend
npm run seed
```

## Current Setup

- **Frontend**: Vercel (React + Vite)
- **Backend**: Render/Railway (Node.js + Express + TypeScript)
- **Database**: MongoDB Atlas (Cloud)

## Environment Variables Summary

### Frontend (Vercel)
```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

### Backend (Render/Railway)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/restaurant-db
PORT=5000
NODE_ENV=production
```

## Post-Deployment Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Render/Railway
- [ ] MongoDB Atlas configured and accessible
- [ ] Database seeded with menu items
- [ ] Frontend environment variable updated with backend URL
- [ ] Frontend redeployed with correct backend URL
- [ ] Test the live site:
  - [ ] Menu loads from database
  - [ ] Can add items to cart
  - [ ] Can place orders
  - [ ] Orders save to database

## Troubleshooting

### CORS Errors
- Ensure backend has CORS enabled (already configured in `server.ts`)
- Check that frontend is using HTTPS if backend is HTTPS

### Menu Not Loading
- Check backend logs in Render/Railway
- Verify MongoDB connection string is correct
- Ensure database is seeded

### Orders Not Saving
- Check backend API endpoint is accessible
- Verify MongoDB has write permissions
- Check browser console for errors

## Your Live URLs

- **Frontend**: https://your-project.vercel.app
- **Backend**: https://your-backend.onrender.com
- **API Health Check**: https://your-backend.onrender.com/api/health

---

**Note**: Free tier services may spin down after inactivity. First request might take 30-60 seconds to wake up.

