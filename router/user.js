const express = require("express");
const router = express.Router();
const user = require("../models/user");
router.get("/api/users", async (req, res) => {
  try {
    const users = await user.find();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("ds");
  } catch (err) {
    res.send("Error", err);
  }
});
router.post("/api/signup", async (req, res) => {
  console.log(JSON.stringify(req.body));
  const pop = new user(req.body);
  //res.send(pop);
  try {
    const a1 = await pop.save();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(a1);
    console.log("Data Saved");
  } catch (err) {
    res.send("Error , Could not Save Data" + err);
  }
});
module.exports = router;
