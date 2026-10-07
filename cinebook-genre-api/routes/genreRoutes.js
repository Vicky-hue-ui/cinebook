const express = require('express');
const router = express.Router();
const {
  getAllGenres,
  getGenreById,
  createGenre
} = require('../controllers/genreController');

// Define API routes
router.get('/', getAllGenres);
router.get('/:id', getGenreById);
router.post('/', createGenre);

module.exports = router;
