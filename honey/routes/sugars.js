// import Express's router module
const express = require('express'),
      router = express.Router();

const sugarsCtrl = require('../controllers/sugars');


router.get('/', sugarsCtrl.index);
router.get('/new', sugarsCtrl.new);

module.exports = router;