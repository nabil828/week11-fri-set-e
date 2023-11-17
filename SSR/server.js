

const express = require('express');
const app = express();



app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.get('/getCityWeather', async (req, res) => {
  resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`)
  jsonResp = await resp.json()
  res.send(jsonResp);
});


