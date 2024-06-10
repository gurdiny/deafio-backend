const mongoose = require("mongoose");
const modelName = "post";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100,
    },
    image: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
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
// - title (string)
// - image (string)
// - body (string )
// - user (ObjectId referencia a UserId)
// - created_at (date)
// - updated_at (date
