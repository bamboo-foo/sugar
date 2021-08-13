const Context = require("../models/context"),
  mongoose = require("mongoose");

module.exports = {
  index,
  new: newContext,
  create,
  show,
  edit,
  update,
};

async function update(req, res) {
  try {
    let foundRecord = await Context.findById(req.params.id);

    for (let key in req.body) {
      foundRecord[key] = req.body[key];
    }
    foundRecord.save(function (err) {
      if (err) return res.redirect("/contexts");
      console.log("Hi from update in contextCtrl, success: ", foundRecord);

      res.status(200);
      res.send("record updated");
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send("Resource not available");
  }
}

async function edit(req, res) {
  try {
    let context = await Context.findById(req.params.id);
    console.log("hello dear from edit in contextCtrl: ", context);
    res.render("contexts/edit", {
      title: "Edit Context",
      context,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.redirect("/contexts");
  }
}

async function show(req, res) {
  try {
    let context = await Context.findById(req.params.id);
    res.render("contexts/show", {
      title: "Detailed Context",
      context,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.redirect("/contexts");
  }
  res.render("contexts/show");
}

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
