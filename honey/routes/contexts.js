const express = require("express"),
  router = express.Router();

const contextCtrl = require("../controllers/contexts");

router.get("/", contextCtrl.index);
router.get("/new", contextCtrl.new);
router.post("/", contextCtrl.create);

module.exports = router;
