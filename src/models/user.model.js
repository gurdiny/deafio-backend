const mongoose = require("mongoose");
const modelName = "user";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100,
    },
    profilePic: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password: {
      type: String,
      required: true,
    },
    created_ad: {
      type: Date,
      default: Date.now,
    },
    update_at: {
      type: Date,
    },
  },
  { timestamps: { updatedAt: "updated_at" } }
);

module.exports = mongoose.model(modelName, schema);
