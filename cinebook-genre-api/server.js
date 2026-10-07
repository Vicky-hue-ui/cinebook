require('dotenv').config();
const express = require('express');
const genreRoutes = require('./routes/genreRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body payloads
app.use(express.json());

// Mount the genre routes on /api/genres
app.use('/api/genres', genreRoutes);

// Root health-check endpoint
app.get('/', (req, res) => {
  res.send('CineBook Genre API is running!');
});

// Start the HTTP server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
