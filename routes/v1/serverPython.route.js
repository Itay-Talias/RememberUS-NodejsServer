const express = require('express');
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const router = express.Router();


function base64_encode(file) {
    return fs.readFileSync(file, 'base64');
}
router.get('/', (req, res) => {
    res.send("Hello1");
  });
 
router.get('/send_photo_to_python_server', (req, res) => {
    axios.post('http://localhost:5000/image',
    { Base64_image : base64_encode(path.resolve(`${__dirname}/../../public/di.jpg`)) } )
      .then(response => {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  module.exports = router
