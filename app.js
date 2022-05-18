const express = require("express");
const apiRouter = require(`${__dirname}/routes/apiPath`); //apiRouter= router from apiPage
const path = require("path");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.use(express.json());

//when using /api --->going to /api page(apiPath)
app.use("/api", apiRouter);
