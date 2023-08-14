const express = require('express');
const cors = require('cors'); // Import the cors package
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, 'src', 'assets', 'novel-review.json');

app.get('/api/allNovels', async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const novels = JSON.parse(data);
    res.json(novels);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/api/novels/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile(filePath, 'utf-8');
    const novels = JSON.parse(data);
    const novel = novels.find(novel => novel.id === id);
    if (novel) {
      res.json(novel);
    } else {
      res.status(404).json({ message: 'Novel not found' });
    }
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/allNovelsByGenre', async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const novels = JSON.parse(data);

    const novelsByGenre = {};

    // Organize novels by genre
    novels.forEach(novel => {
      const genre = novel.genre.toLowerCase();
      if (!novelsByGenre[genre]) {
        novelsByGenre[genre] = {
          title: `${novel.genre}`,
          novels: [],
        };
      }
      novelsByGenre[genre].novels.push(novel);
    });

    // Convert the object to an array
    const response = Object.values(novelsByGenre);

    res.json(response);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/allNovelsByGenre/:genre', async (req, res) => {
  try {
    const genreParam = req.params.genre.toLowerCase(); // Get the genre parameter
    const data = await fs.readFile(filePath, 'utf-8');
    const novels = JSON.parse(data);

    const novelsByGenre = {
      title: `${genreParam}`,
      novels: novels.filter(novel => novel.genre.toLowerCase() === genreParam),
    };

    res.json(novelsByGenre);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/allNovelsByName', async (req, res) => {
  try {
    const { name } = req.query;
    const data = await fs.readFile(filePath, 'utf-8');
    const novels = JSON.parse(data);
    const filteredNovels = novels.filter(novel => novel.name.toLowerCase().includes(name.toLowerCase()));
    res.json(filteredNovels);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
