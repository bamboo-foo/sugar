const Sugar = require("../models/sugar"),
  mongoose = require("mongoose");

module.exports = {
  index,
  new: newSugar,
  create,
  show,
  edit,
  update,
  delete: deleteOne,
};
// else the validator should say please enter in mmol/L or offer up a conversion if reading is out of bounds
async function deleteOne(req, res) {
  try {
    let response = await Sugar.findByIdAndDelete(req.params.id);
    res.send(response);
  } catch (error) {
    res.status(500);
    res.send("resource not available");
    console.log("hi from deleteOne in sugarCtrl: ", err);
  }
}

async function update(req, res) {
  // res.send("updated");
  try {
    let foundRecord = await Sugar.findById(req.params.id);

    for (let key in req.body) {
      foundRecord[key] = req.body[key];
    }
    foundRecord.save(function (err) {
      //TODO: [HON-37] this would result in 404? PATCH to /sugars
      if (err) return res.redirect("/sugars");
      console.log("Hi from update in sugarCtrl, success: ", foundRecord);

      res.status(200);
      res.send("record updated");
    });
  } catch (err) {
    res.status(500);
    res.send("resource not available");
    console.log("Hi from edit in sugarCtrl: ", err);
  }
}

async function edit(req, res) {
  try {
    let sugar = await Sugar.findById(req.params.id);

    res.render("sugars/edit", {
      title: "Edit Record",
      sugar,
    });
  } catch (err) {
    console.log("Hi from edit in sugarCtrl, we have an error: ", err);
  }
}

async function show(req, res) {
  try {
    let sugar = await Sugar.findById(req.params.id);

    res.render("sugars/show", {
      title: "Detailed Sugar Record",
      sugar,
    });
  } catch (err) {
    console.log("Hi from show in sugarCtrl, we have an error: ", err);
  }
}

async function create(req, res) {
  let valSugarData = validateSugarData(req.body);

  try {
    const newRecord = await new Sugar(valSugarData);
    newRecord.save(function (err) {
      if (err) return res.redirect("/sugars");
      console.log("Hi from create in sugarCtrl, success: ", newRecord);
      return res.redirect("/sugars");
    });
  } catch (err) {
    console.log("Hi from create in sugarCtrl, there was an error: ", err);
  }
}

function newSugar(req, res) {
  res.render("sugars/new", {
    title: "Add a Sugar Reading",
  });
}

async function index(req, res) {
  try {
    let sugars = await Sugar.find({});
    res.render("sugars/index", {
      title: "Sugar Records Analysis",
      sugars,
    });
  } catch (err) {
    console.log(err);
    res.redirect("/index");
  }
}

function validateSugarData(inputData) {
  let dataToBeValidated = inputData;
  // TODO: [HON-25] conversion between units for storage

  dataToBeValidated.takenAtDate =
    dataToBeValidated.takenAtDate === ""
      ? todaysDate()
      : dataToBeValidated.takenAtDate;

  dataToBeValidated.reading = parseFloat(inputData.reading);
  if (dataToBeValidated.reading > 25) {
    // TODO: [HON-18] this needs to be fixed, min max needs to be added
    console.log(
      "Hi from sugarValidationService in sugarCtrl: We have failed with your input being high need unit prompt or conversion"
    );
  } else {
    validatedData = dataToBeValidated;

    return validatedData;
  }
}

function todaysDate() {
  const dateEntered = new Date(),
    year = dateEntered.getFullYear().toString(),
    month = (dateEntered.getMonth() + 1).toString(),
    date = dateEntered.getDate();

  function unshiftZero(input) {
    if (input < 10) {
      let dateStr = input.toString();

      return "0" + dateStr;
    } else {
      return input.toString();
    }
  }

  let monthStr = unshiftZero(month),
    dateStr = unshiftZero(date);

  return year + "-" + monthStr + "-" + dateStr;
}
