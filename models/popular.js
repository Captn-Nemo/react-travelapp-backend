const mongoose = require("mongoose");

const popularSchema = new mongoose.Schema({
  placeName: { type: String, required: true },
  placeDesc: { type: String, required: true },
  placeImage: [{ type: String, type: String }],
});
module.exports = mongoose.model("popular", popularSchema);
