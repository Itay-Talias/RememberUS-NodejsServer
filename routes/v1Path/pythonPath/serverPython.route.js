//in order to pass the router to the v1Page and using the current page router
const express = require("express");
const pythonServerRouter = express.Router();
module.exports = pythonServerRouter;

const fs = require("fs");
const axios = require("axios");
const { path } = require("express/lib/application");

function base64_encode(file) {
  return fs.readFileSync(file, "base64");
}

///  -----api/v1/python/------
pythonServerRouter.get("/", (req, res) => {
  res.send("Welcome to phyton location");
});

pythonServerRouter.get("/send_photo_to_python_server", (req, res) => {
  // axios.post('http://localhost:5000/image',
  // { Base64_image : base64_encode('../../../public/di.jpg') } )
  //   .then(response => {
  //     console.log(response.data);
  //     res.send(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  //when using send and send an object automaticalyy parse to jason
  res.send("Hello");
});
