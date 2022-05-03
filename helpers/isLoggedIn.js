// const atob = require("atob");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

module.exports = isLoggedIn;

function isLoggedIn(req, res, next) {
  
  try {
    const decodedToken = jwt.verify(req.cookies.token, process.env.SECRET);
    req.user = decodedToken.user
    console.log('13', req.user)
    next();
  } catch (error) {
    res.redirect(400, "/")
  }
  //   console.log("030", atob(req.cookies.token.split(".")[1]));
}
