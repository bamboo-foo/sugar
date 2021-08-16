const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const sugarSchema = new Schema(
  {
    reading: {
      type: Number,
      min: 1,
      max: 25, // else the validator should say// else the validator should say please enter in mmol/L or offer up a conversion if reading is out of bounds
      required: true,
      // TODO: [HON-19] sneed option for date time and validate it into right format
    },
    units: {
      type: String,
      required: true,
      enum: ["mmol/L", "mg/dL"],
      default: "mmol/L",
    },
    readingType: {
      type: String,
      required: false,
      enum: ["pre-meal", "post-meal", "fasting"],
    },
    takenAtDate: {
      type: Date,
    },
    takenAtTime: {
      // army time
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sugar", sugarSchema);
