//in order to pass the router to the apiPath
const express = require("express");
const v1Router = express.Router();
module.exports = v1Router;

const path = require("path");

//python Path
//getting the router from next path /api/v1/python
const serverPythonRouter = require(`${__dirname}/pythonPath/serverPython.route`);
//when using /api/v1/python --->going to /api/v1/python page(serverPython.route)
v1Router.use("/python", serverPythonRouter);

//Load Logic manager
const LogicManager = require(path.join(__dirname, "../../Logic/LogicManager"));

//when using /api/v1/Login (must send userName and password as parameters)
v1Router.post("/Login", async (req, res) => {
  res.send(
    await LogicManager.logInToDataBase(req.body.userName, req.body.password)
  );
});

//when using /api/v1/SignUp (must send userName, password, email and adress as parameters)
v1Router.post("/SignUp", async (req, res) => {
  res.send(
    await LogicManager.signUpToDataBase(
      req.body.userName,
      req.body.password,
      req.body.email,
      req.body.adress
    )
  );
});

//when using /api/v1/Delete (must send userName)
v1Router.post("/Delete", async (req, res) => {
  res.send(await LogicManager.DeleteDocumentByUserName(req.body.userName));
});

//when using /api/v1/ChangePassword (must send userName)
v1Router.post("/ChangePassword", async (req, res) => {
  res.send(
    await LogicManager.changePasswordForCertainuserName(
      req.body.userName,
      req.body.oldPassword,
      req.body.newPassword
    )
  );
});
