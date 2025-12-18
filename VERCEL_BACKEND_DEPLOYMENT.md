# Deploying Backend to Vercel

## Backend Configuration for Vercel

The backend is now configured to run as a Vercel serverless function.

### Files Added/Modified:
- ✅ `backend/vercel.json` - Vercel configuration
- ✅ `backend/api/index.ts` - Serverless entry point
- ✅ `backend/src/server.ts` - Updated to support serverless
- ✅ `backend/package.json` - Moved types to dependencies

## Deployment Steps

### Step 1: Deploy Backend to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository: `Taf0711/CSCI-39548-HW3`
4. **Configure Backend:**
   - **Project Name**: `restaurant-backend` (or any name)
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: Leave empty or `npm run build`
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

5. **Environment Variables** (IMPORTANT!):
   Click "Environment Variables" and add:
   - **Key**: `MONGODB_URI`
   - **Value**: `mongodb+srv://tafseersf92_db_user:qUZM2sMHhIEW647H@cluster0.bmqy04.mongodb.net/restaurant-db?retryWrites=true&w=majority`
   - **Apply to**: All (Production, Preview, Development)
   
   - **Key**: `NODE_ENV`
   - **Value**: `production`
   - **Apply to**: Production only

6. Click **"Deploy"**

7. **Wait for deployment** (2-3 minutes)

8. **Copy the backend URL** (e.g., `https://restaurant-backend.vercel.app`)

### Step 2: Seed the Production Database

After backend is deployed, seed the database:

```bash
# In your terminal
cd backend

# Temporarily update .env with production MongoDB URI (or use the one already there)
npm run seed
```

### Step 3: Deploy/Update Frontend

1. Go back to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your frontend project (or create new one)

**If updating existing project:**
   - Go to **Settings** → **Environment Variables**
   - Update `VITE_API_URL` to: `https://your-backend.vercel.app/api`
   - Go to **Deployments** → Click "..." → **"Redeploy"**

**If creating new project:**
   - Click **"Add New"** → **"Project"**
   - Import `Taf0711/CSCI-39548-HW3`
   - **Configure:**
     - **Framework Preset**: Vite
     - **Root Directory**: `./` (project root)
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   
   - **Environment Variables:**
     - **Key**: `VITE_API_URL`
     - **Value**: `https://your-backend.vercel.app/api`
   
   - Click **"Deploy"**

### Step 4: Test Your Deployment

1. Visit your frontend URL
2. Open browser DevTools (F12) → Network tab
3. Go to Menu page
4. Check if API calls are successful:
   - Should see requests to `https://your-backend.vercel.app/api/menu`
   - Status should be 200 OK

5. Test functionality:
   - ✅ Menu loads
   - ✅ Add to cart works
   - ✅ Checkout works
   - ✅ Check MongoDB Atlas to see orders

## Troubleshooting

### CORS Errors
- Already configured in `server.ts`
- If issues persist, check that frontend URL is using HTTPS

### "Function Timeout"
- Vercel free tier has 10-second timeout
- MongoDB connection should be fast enough
- If timeout occurs, check MongoDB Atlas network access

### "Module not found"
- Ensure all TypeScript types are in `dependencies` not `devDependencies`
- Already fixed in `package.json`

### Menu Not Loading
- Check backend logs in Vercel dashboard
- Verify `MONGODB_URI` environment variable is set
- Test backend directly: `https://your-backend.vercel.app/api/health`

### Orders Not Saving
- Check browser console for errors
- Verify MongoDB connection string has write permissions
- Check Vercel function logs

## Environment Variables Summary

### Backend (Vercel)
```
MONGODB_URI=mongodb+srv://tafseersf92_db_user:qUZM2sMHhIEW647H@cluster0.bmqy04.mongodb.net/restaurant-db?retryWrites=true&w=majority
NODE_ENV=production
```

### Frontend (Vercel)
```
VITE_API_URL=https://your-backend.vercel.app/api
```

## Important Notes

1. **Serverless Functions**: Backend runs as serverless functions, not a persistent server
2. **Cold Starts**: First request may take 1-2 seconds (normal for serverless)
3. **MongoDB Connection**: Uses connection pooling for efficiency
4. **No PORT needed**: Vercel handles port assignment automatically

## Your Deployment URLs

After deployment, you'll have:
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://restaurant-backend.vercel.app`
- **API Health**: `https://restaurant-backend.vercel.app/api/health`
- **API Menu**: `https://restaurant-backend.vercel.app/api/menu`

## Testing the Backend

Test backend endpoints directly:

```bash
# Health check
curl https://your-backend.vercel.app/api/health

# Get menu
curl https://your-backend.vercel.app/api/menu

# Create order (POST)
curl -X POST https://your-backend.vercel.app/api/orders \
  -H "Content-Type: application/json" \
  -d '{"items":[{"menuItemId":"YOUR_ITEM_ID","quantity":1}]}'
```

---

**Ready to deploy!** Follow the steps above and your full-stack app will be live on Vercel! 🚀

