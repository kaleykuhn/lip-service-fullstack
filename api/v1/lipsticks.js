// The users resource
const express = require("express");
const router = express.Router();
const db = require("../../db");
const selectLipsticks = require("../../queries/selectLipsticks");
//const { toJson, toSafeParse } = require("../../utils/helpers");

// @route       GET api/v1/lipsticks
// @desc        Get all lipsticks
// @access      Public

router.get("/", (req, res) => {
   db.query(selectLipsticks)
      .then((dbRes) => {
         //const lipsticks = toSafeParse(toJson(dbRes));
         // console.log(lipsticks);
         //res.json(lipsticks);
         console.log(dbRes);
         res.json(dbRes);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

module.exports = router;
