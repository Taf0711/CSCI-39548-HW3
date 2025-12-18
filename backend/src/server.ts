import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import menuRoutes from './routes/menuRoutes';
import orderRoutes from './routes/orderRoutes';

// Load environment variables
dotenv.config();

// Initialize Express app
const app: Express = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

// Health check route
app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', message: 'Restaurant API is running' });
});

// Root route
app.get('/', (req: Request, res: Response) => {
    res.json({ 
        message: 'Welcome to Restaurant API',
        endpoints: {
            menu: '/api/menu',
            orders: '/api/orders',
            health: '/api/health'
        }
    });
});

// Start server (only in development, not in Vercel)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
}

// Export for Vercel serverless
export default app;

