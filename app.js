const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/posts', postRoutes);
app.use(errorHandler);

module.exports = app;