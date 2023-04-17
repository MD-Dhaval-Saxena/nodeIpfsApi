const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },

  path: String,
  hash: String,
  size: Number,
});

module.exports = mongoose.model("Data", dataSchema);
