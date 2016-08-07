const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

var movies = [
  {
      title: 'Star Wars IV',
      year: 1977
  },
  {
      title: 'Star Wars V',
      year: 1980
  },
  {
      title: 'Star Wars VI',
      year: 1983
  },
  {
      title: 'Star Wars VII',
      year: 2015
  },
];

app.get('/api/movies', (req, res) => {
  res.json(movies);
});


app.listen(PORT, _ => `Server listening on port ${PORT}`);