//in order to pass the router to the apiPath
const express = require("express");
const UserRouter = express.Router();
module.exports = UserRouter;

//Load Logic manager
const LogicManager = require(path.join(__dirname, "../../Logic/LogicManager"));

//when using /api/v1/Login (must send userName and password as parameters)
UserRouter.post("/Login", async (req, res) => {
    res.send(
      await LogicManager.logInToDataBase(req.body.userName, req.body.password)
    );
  });
  
  //when using /api/v1/SignUp (must send userName, password, email and adress as parameters)
  UserRouter.post("/SignUp", async (req, res) => {
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
  UserRouter.post("/Delete", async (req, res) => {
    res.send(await LogicManager.DeleteDocumentByUserName(req.body.userName));
  });
  
  //when using /api/v1/ChangePassword (must send userName)
  UserRouter.post("/ChangePassword", async (req, res) => {
    res.send(
      await LogicManager.changePasswordForCertainuserName(
        req.body.userName,
        req.body.oldPassword,
        req.body.newPassword
      )
    );
  });