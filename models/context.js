const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const contextSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  stress: {
    type: Number,
    required: false,
    min: 0,
    max: 10,
  },
  sleep: {
    type: Number,
    required: false,
    min: 0,
    max: 10,
  },
  exercise: {
    type: Boolean,
  },
  sugars: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sugar",
    },
  ],
});

module.exports = mongoose.model("Context", contextSchema);
