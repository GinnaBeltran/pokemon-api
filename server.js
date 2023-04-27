const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static('dist'));

app.get('/api/pokemon/:name', (req, res) => {
  const name = req.params.name;
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Error fetching data from Pokemon API');
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
