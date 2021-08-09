// import Express's router module
const express = require('express'),
      router = express.Router();

const sugarsCtrl = require('../controllers/sugars');


router.get('/', sugarsCtrl.index);

module.exports = router;