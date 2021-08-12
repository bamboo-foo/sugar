const Context = require("../models/context"),
  mongoose = require("mongoose");

module.exports = {
  index,
  new: newContext,
  create,
};

async function create(req, res) {
  try {
    //TODO: [HON-40] validate data here ;
    //validatedContextData = validateContextService(req.body);
    validatedContextData = req.body;

    const newContextRecord = await new Context(validatedContextData);
    newContextRecord.save(function (err) {
      if (err) return res.redirect("/contexts");
      console.log("Hi from create in contextCtrl, success: ", newContextRecord);
      res.status(200);
      return res.redirect("/contexts");
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send("resource not available");
  }
}

function newContext(req, res) {
  res.render("contexts/new", { title: "Enter a New Context" });
}

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

function validateContextService(reqInput) {
  // watch the true false as a string coming in
  return;
}
