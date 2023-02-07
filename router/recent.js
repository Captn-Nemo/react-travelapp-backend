const express = require("express");
const router = express.Router();
const popular = require("../models/recent");
router.get("/api/recentdestinations", async (req, res) => {
  try {
    const populars = await popular.find();
    // const pop = [
    //   {
    //     placeName: "Place 1",
    //     placeDesc: "Desc 1",
    //     placeImage: ["https://picsum.photos/seed/picsum/300"],
    //   },
    //   {
    //     placeName: "Place 2",
    //     placeDesc: "Desc 2",
    //     placeImage: ["https://picsum.photos/seed/picsum/300"],
    //   },
    //   {
    //     placeName: "Place 3",
    //     placeDesc: "Desc 3",
    //     placeImage: [
    //       "https://picsum.photos/id/16/300",
    //       "https://picsum.photos/id/12/200",
    //     ],
    //   },
    // ];
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(populars);
  } catch (err) {
    res.send("Error", err);
  }
});
router.post("/api/recentdestinations", async (req, res) => {
  console.log(JSON.stringify(req.body));
  /* const pop = new popular({
    placeName: req.body.placeName,
    placeDesc: req.body.placeDesc,
    placeImage: req.body.placeImage,
  }); */

  const pop = [
    {
      placeName: "Place 1",
      placeDesc: "Desc 1",
      placeImage: ["link1", "link2", "link3"],
    },
    {
      placeName: "Place 1",
      placeDesc: "Desc 1",
      placeImage: ["link1", "link2", "link3"],
    },
  ];

  res.send(pop);
  //   try {
  //     const a1 = await pop.save();
  //     res.json(a1);
  //   } catch (err) {
  //     res.send("Error" + err);
  //   }
});
module.exports = router;
