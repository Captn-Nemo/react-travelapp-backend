const mongoose = require("mongoose");
const recentSchema = new mongoose.Schema({
  placeName: { type: String, required: true },
  placeDesc: { type: String, required: true },
  placeImage: [{ type: String, type: String }],
});

module.exports = mongoose.model("Recent", recentSchema);



