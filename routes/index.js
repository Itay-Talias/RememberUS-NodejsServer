const express = require('express');
const v1Router = require(`${__dirname}/v1/index`);

const router = express.Router();
router.use('/v1', v1Router);

router.get('/', (req, res) => {
    res.send("Hello1");
  });

module.exports = router;
