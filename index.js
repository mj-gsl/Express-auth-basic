import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from './auth.js';

dotenv.config();

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Serve static files
const __dirname = path.resolve(); // Get the directory name of the current module
app.use(express.static(path.join(__dirname, 'public'))); // Serve files from the "public" directory

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the authentication system!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
