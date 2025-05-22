const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db')
require('dotenv').config();

const reminderRoutes = require('./routes/reminders');

const app = express();

// Middleware
app.use(cors({
  origin: 'https://zocco-frontend.vercel.app', // ✅ allow your frontend
  credentials: true, // optional if you're using cookies or sessions
}));

app.use(express.json());

// Routes
app.use('/api/reminders', reminderRoutes);



connectDB()

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
