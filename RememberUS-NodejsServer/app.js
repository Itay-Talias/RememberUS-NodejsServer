const express = require("express");
const apiRouter = require(`${__dirname}/routes/apiPath`); //apiRouter= router from apiPage
const path = require("path");
const cors = require("cors");

const app = express();
const port = 4000;

//LogicManager,initialize the logic
const logicManager = require(path.join(__dirname, "/Logic/LogicManager"));

app.listen(port, async () => {
  console.log(`listening on port ${port}`);
  console.log(`Initializing signedUp user array... `);
  await logicManager.LoadingsignedUsersArray();
  console.log(`Finish to Initializing signedUp user array...`);
});

app.use(express.json());

app.use(cors());
//when using /api --->going to /api page(apiPath)
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});
