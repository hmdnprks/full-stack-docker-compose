import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('go to /random-color to randomize color')
})

app.get('/random-color', (req,  res) => {
  const color = Math.floor(Math.random()*16777215).toString(16);

  res.json({
    data: `#${color}`
  })
})

app.listen(3001, () => console.log('server running on port 3001'))