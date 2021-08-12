const Context = require("../models/context"),
  mongoose = require("mongoose");

module.exports = {
  index,
};

async function index(req, res) {
  try {
    let contexts = await Context.find({});
    res.render("contexts/index", {
      title: "Context Informs Readings",
      contexts,
    });
  } catch (error) {
    res.status(500);
    res.send("resource unavailable");
  }
}
