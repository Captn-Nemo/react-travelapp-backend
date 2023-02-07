const express = require("express");
const router = express.Router();
const popular = require("../models/popular");
router.get("/api/populardestinations", async (req, res) => {
  try {
    const populars = await popular.find();
    res.json(populars);
  } catch (err) {
    res.send("Error", err);
  }
});
router.post("/api/populardestinations", async (req, res) => {
  console.log(JSON.stringify(req.body));
  const pop = new popular({
    placeName: req.body.placeName,
    placeDesc: req.body.placeDesc,
    placeImage: req.body.placeImage,
  });
  try {
    const a1 = await pop.save();
    res.json(a1);
  } catch (err) {
    res.send("Error" + err);
  }
});
module.exports = router;
