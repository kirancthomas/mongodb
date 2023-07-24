const express = require("express");
const router = express.Router();
const db = require("../db");

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.post("/signup", async function (req, res) {
  try {
    const user = req.body;
    console.log(user);
    const collection = db.collection("user");
    const save = await collection.insertOne(user);
    res.json(save);
  } catch (err) {
    console.error("Error", err);
    res.status(500).json({ error: "Something went wrong. Please try again" });
  }
});

module.exports = router;
