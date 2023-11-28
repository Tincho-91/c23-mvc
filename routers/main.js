const path = require('path');
const mainControllers = require (path.join (__dirname, '../controllers/mainController.js'))
const express = require('express');
const router = express.Router();


router.get('/',mainControllers.main);

module.exports = router;