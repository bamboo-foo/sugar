const express = require("express"),
  router = express.Router();

const contextCtrl = require("../controllers/contexts");

router.get("/", contextCtrl.index);

module.exports = router;
