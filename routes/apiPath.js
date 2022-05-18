//in order to pass the router to the app.js
const express = require("express");
let apiRouter = express.Router();
module.exports = apiRouter;

//getting the router from next path /api/v1/v1Page
const v1Router = require(`${__dirname}/v1Path/v1Page`);

//when using /api/v1 --->going to /api/v1 page(v1Page)
apiRouter.use("/v1", v1Router);
