const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000

const fs = require('fs');

function base64_encode(file) {
    return fs.readFileSync(file, 'base64');
}

app.get('/', (req, res) => {
  res.send("Node server");
})

app.get('/python', (req, res) => {
  axios.post('http://localhost:5000/image',
  { Base64_image : base64_encode(`${__dirname}/public/di.jpg`) } )
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})