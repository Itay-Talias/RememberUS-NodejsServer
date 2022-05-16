const express = require('express');
const serverPythonRouter = require(`${__dirname}/serverPython.route`);


const router = express.Router();
router.use('/python', serverPythonRouter);

module.exports = router;
