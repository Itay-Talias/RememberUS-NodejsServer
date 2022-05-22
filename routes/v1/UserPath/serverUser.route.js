//in order to pass the router to the apiPath
const express = require("express");
const UserRouter = express.Router();
module.exports = UserRouter;
const path = require("path");

//Load Logic manager
const LogicManager = require(path.join(
  __dirname,
  "../../../Logic/LogicManager"
));

//when using /api/v1/User/Login (must send userName and password as parameters)
UserRouter.post("/Login", async (req, res) => {
  res.send(
    await LogicManager.logInToDataBase(req.body.userName, req.body.password)
  );
});

//when using /api/v1/User/SignUp (must send userName, password, email and adress as parameters)
UserRouter.post("/SignUp", async (req, res) => {
  res.send(
    await LogicManager.signUpToDataBase(
      req.body.firstName,
      req.body.lastName,
      req.body.userName,
      req.body.password,
      req.body.email,
      req.body.adress,
      req.body.gender
    )
  );
});

//when using /api/v1/User/Delete (must send userName)
UserRouter.delete("/Delete", async (req, res) => {
  res.send(await LogicManager.DeletePersonFromDataBase(req.body.userName));
});

//when using /api/v1/User/ChangePassword (must send userName,oldPassword and newPassword)
UserRouter.post("/ChangePassword", async (req, res) => {
  res.send(
    await LogicManager.changePasswordForCertainuserName(
      req.body.userName,
      req.body.oldPassword,
      req.body.newPassword
    )
  );
});

////when using /api/v1/User/AddForPlanImage (must send userName and forplanimagebase64)
UserRouter.post("/AddForPlanImage", async (req, res) => {
  res.send(
    await LogicManager.updateCertainPersonForPlanImage(
      req.body.userName,
      req.body.forPlanImageInBase64
    )
  );
});

////when using /api/v1/User/GetUserInfo (must send userName)
UserRouter.post("/GetUserInfo", async (req, res) => {
  res.send(LogicManager.getPersonInfoByUserName(req.body.userName));
});

////when using /api/v1/User/AddOneFurniture (must send userName,ImageInBase64)
UserRouter.post("/AddOneFurnitureWithPhoto", async (req, res) => {
  res.send(
    await LogicManager.AddOneFurnitureByuserNameWithPhoto(
      req.body.userName,
      req.body.furnitureImageBase64
    )
  );
});
