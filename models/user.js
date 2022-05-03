const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 3,
    },
    googleId: String,
    sugarReadings: [
      {
        type: Schema.Types.ObjectId,
        ref: "sugar",
      },
    ],
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("User", userSchema);
