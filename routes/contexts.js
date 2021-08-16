const express = require("express"),
  router = express.Router();

const contextCtrl = require("../controllers/contexts");

router.get("/", contextCtrl.index);
router.get("/new", contextCtrl.new);
router.post("/", contextCtrl.create);
router.get("/:id/edit", contextCtrl.edit);
router.patch("/:id/edit", contextCtrl.update);
router.get("/:id", contextCtrl.show);
router.delete("/:id", contextCtrl.delete);

module.exports = router;
