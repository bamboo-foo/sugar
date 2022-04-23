const User = require("../models/user");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");
// const { options } = require("../routes/api/users");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;
module.exports = {
  login,
  create,
  new: newUser,
};

function newUser(req, res) {
  res.render("users/new", { title: "Create a User" });
}

async function create(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).send(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function login(req, res) {
  try {
    // const user = User.findOne({ id: req.body.user._id });
    const user = await User.findOne({ email: req.body.email });

    if (!(await bcrypt.compare(req.body.password, user.password)))
      throw new Error();

    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "15m" });

    res
      .status(200)
      .cookie("token", token, { expires: false, httpOnly: true })
      .redirect("/sugars/");
  } catch (error) {
    // res.status(400).json({ message: "Bad Credentials"});
    res.status(400).json("Bad Credentials");
  }
}
