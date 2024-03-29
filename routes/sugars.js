// import Express's router module
const express = require("express"),
  router = express.Router();

const sugarsCtrl = require("../controllers/sugars");
const isLoggedIn = require("../helpers/isLoggedIn");

router.get("/", isLoggedIn, sugarsCtrl.index);
router.get("/new", sugarsCtrl.new);
router.post("/", isLoggedIn, sugarsCtrl.create);
router.get("/:id/edit", sugarsCtrl.edit);
router.patch("/:id/edit", sugarsCtrl.update);
router.delete("/:id", sugarsCtrl.delete);
router.get("/:id", sugarsCtrl.show);
// TODO: [HON-22] we should create a distinct analysis view which composes the user weights and such by takenAtDate

module.exports = router;
