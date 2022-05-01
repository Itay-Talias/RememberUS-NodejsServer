const express = require('express')
const app = express()
const port = 2000


app.get('/get', (req, res) => {
    res.send("Hello World");
  })
  
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })