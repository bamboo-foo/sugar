const express = require("express");
const router = express.Router();

const usersCtrl = require("../../controllers/users");

router.post("/login", usersCtrl.login);
router.get("/new", usersCtrl.new);
router.post("/signup", usersCtrl.create);

module.exports = router;
