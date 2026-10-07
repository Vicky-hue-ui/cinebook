const genres = require('../data/store');

// GET /api/genres - Get all genres
const getAllGenres = (req, res) => {
  res.status(200).json(genres);
};

// GET /api/genres/:id - Get single genre by ID
const getGenreById = (req, res) => {
  const genreId = parseInt(req.params.id, 10);

  if (isNaN(genreId)) {
    return res.status(400).json({ message: 'Invalid genre ID format' });
  }

  const genre = genres.find((g) => g.id === genreId);

  if (!genre) {
    return res.status(404).json({ message: 'Genre not found' });
  }

  res.status(200).json(genre);
};

// POST /api/genres - Create a new genre
const createGenre = (req, res) => {
  const { name, classics } = req.body;

  // Basic validation: name and classics are required
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ 
      message: 'Validation Error: "name" is required and must be a non-empty string.' 
    });
  }

  if (!classics || !Array.isArray(classics)) {
    return res.status(400).json({ 
      message: 'Validation Error: "classics" is required and must be an array of strings.' 
    });
  }

  // Automatically generate new unique ID
  const maxId = genres.reduce((max, g) => (g.id > max ? g.id : max), 0);
  const newGenre = {
    id: maxId + 1,
    name: name.trim(),
    classics: classics
  };

  genres.push(newGenre);

  res.status(201).json(newGenre);
};

module.exports = {
  getAllGenres,
  getGenreById,
  createGenre
};
