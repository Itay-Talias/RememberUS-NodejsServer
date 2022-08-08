const express = require("express");
const apiRouter = require(`${__dirname}/routes/apiPath`); //apiRouter= router from apiPage
const path = require("path");

const app = express();
const port = 3000;

//LogicManager,initialize the logic
const logicManager = require(path.join(__dirname, "/Logic/LogicManager"));

app.listen(port, async () => {
  console.log(`listening on port ${port}`);
  await logicManager.ConnectToMongoDB();
  console.log("Server is Ready !!!");
});

app.use(express.json());

//when using /api --->going to /api page(apiPath)
app.use("/api", apiRouter);

//Function for checking ...
app.get("/", (req, res) => {
  res.send("Hello");
});
