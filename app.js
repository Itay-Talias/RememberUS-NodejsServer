const express = require('express');
// const axios = require('axios');
const apiRouter = require(`${__dirname}/routes/index`);


const app = express();
const port = 3000;

app.use('/api',apiRouter);

app.get('/', (req, res) => {
  res.send("Node server");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})



// function base64_encode(file) {
//     return fs.readFileSync(file, 'base64');
// }

// app.get('/python', (req, res) => {
//   axios.post('http://localhost:5000/image',
//   { Base64_image : base64_encode(`${__dirname}/public/di.jpg`) } )
//     .then(response => {
//       console.log(response.data);
//       res.send(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// })