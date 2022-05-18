//in order to pass the router to the apiPath
const express = require("express");
const v1Router = express.Router();
module.exports = v1Router;

const path = require("path");
//classes
const personClass = require(path.join(__dirname, "../../Classes/person.js"));

//getting the router from next path /api/v1/python
const serverPythonRouter = require(`${__dirname}/pythonPath/serverPython.route`);

//when using /api/v1/python --->going to /api/v1/python page(serverPython.route)
v1Router.use("/python", serverPythonRouter);

//MongoDB
const { MongoClient } = require("mongodb");
const uriForDatabase =
  "mongodb+srv://omeridan123:!!!!!!!!!1@cluster0.we1ph.mongodb.net/?retryWrites=true&w=majority"; //our uri for connection the cluster
const client = new MongoClient(uriForDatabase); //our Connection to data base object
const myMongoDBFuncions = require(`${__dirname}/mongodbFunc`);

//will close connection in exception and when click logout

//when using /api/v1/Login (must send userName and password as parameters)
v1Router.post("/Login", async (req, res) => {
  console.log(req.body.userName, req.body.password);
  res.send(
    await myMongoDBFuncions.logInToDataBase(
      client,
      req.body.userName,
      req.body.password
    )
  );
});

//when using /api/v1/SignUp (must send userName, password, email and adress as parameters)
v1Router.get("/SignUp", async (req, res) => {
  res.send(
    await myMongoDBFuncions.signUpToDataBase(
      client,
      req.query.userName,
      req.query.password,
      req.query.email,
      req.query.adress
    )
  );
});
