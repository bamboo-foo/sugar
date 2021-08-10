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
      default: "2020-08-10",
      //  function datin() {
      //     const dateEntered = new Date,
      //           year = dateEntered.getFullYear().toString(),
      //           month = (dateEntered.getMonth() + 1).toString(),
      //           date = dateEntered.getDate();

      //     function unshiftZero(input) {

      //         if (input < 10) {
      //             let dateStr = input.toString();

      //             return '0' + dateStr;
      //         } else {
      //             return input.toString();
      //         }

      //     }

      //     let monthStr = unshiftZero(month),
      //         dateStr = unshiftZero(date);

      //     return year + '-' + monthStr + '-' + dateStr;
      // }
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sugar", sugarSchema);
