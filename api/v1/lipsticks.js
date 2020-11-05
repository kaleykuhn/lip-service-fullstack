// The users resource
const express = require("express");
const router = express.Router();
const db = require("../../db");
const selectLipsticks = require("../../queries/selectLipsticks");
const { urlencoded } = require("express");
//const { toJson, toSafeParse } = require("../../utils/helpers");

// @route       GET api/v1/lipsticks
// @desc        Get all lipsticks
// @access      Public

router.get("/", (req, res) => {
   db.query(selectLipsticks)
      //.then((dbRes) => {
      //    // const lipsticks = toSafeParse(toJson(dbRes));
      //    //console.log(lipsticks);
      //    //res.json(lipsticks);
      // console.log(dbRes);
      //res.json(dbRes);
      // })
      .then((lipsticks) => {
         const camelCaseLipsticks = lipsticks.map((lipstick) => {
            return {
               id: lipstick.id,
               name: lipstick.name,
               brand: lipstick.brand,
               color: lipstick.color,
               finish: lipstick.finish,
               desc: lipstick.desc,
               modelImageUrl: lipstick.model_image_url,
               buyNowUrl: lipstick.buy_now_url,
               tag: lipstick.tag_id,
            };
         });
         res.json(camelCaseLipsticks);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

module.exports = router;
