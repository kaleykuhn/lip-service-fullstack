// The users resource
const express = require("express");
const router = express.Router();
const db = require("../../db");
const selectUser = require("../../queries/selectUser");
const { toJson, toSafeParse } = require("../../utils/helpers");

// @route       GET api/v1/users
// @desc        Get a valid user via email and password
// @access      Public

router.get("/", (req, res) => {
   db.query(selectUser("kaleyk@gmail.com", "replace_me"))
      .then((dbRes) => {
         const user = toSafeParse(toJson(dbRes))[0];
         console.log(user);
         res.json(user);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

module.exports = router;

// // The users resource
// const express = require("express");
// const router = express.Router();
// const db = require("../../db");
// const insertUser = require("../../queries/insertUser");
// const selectUserById = require("../../queries/selectUserById");
// const selectUserByEmail = require("../../queries/selectUserByEmail");
// const { toHash } = require("../../utils/helpers");
// const getSignUpEmailError = require("../../validation/getSignUpEmailError");
// const getSignUpPasswordError = require("../../validation/getSignUpPasswordError");
// const getLoginEmailError = require("../../validation/getLoginEmailError");
// const getLoginPasswordError = require("../../validation/getLoginPasswordError");

// // @route       POST api/v1/users
// // @desc        POST create a new user
// // @access      Public
// router.post("/", async (req, res) => {
//    const { id, email, password, createdAt } = req.body;
//    const emailError = await getSignUpEmailError(email);
//    const passwordError = getSignUpPasswordError(password, email);
//    let dbError = "";
//    if (emailError === "" && passwordError === "") {
//       const user = {
//          id,
//          email,
//          password: await toHash(password),
//          created_at: createdAt,
//       };

//       db.query(insertUser, user)
//          .then(() => {
//             db.query(selectUserById, id)
//                .then((users) => {
//                   const user = users[0];
//                   res.status(200).json({
//                      id: user.id,
//                      email: user.email,
//                      createdAt: user.created_at,
//                   });
//                })
//                .catch((err) => {
//                   console.log(err);
//                   dbError = `${err.code} ${err.sqlMessage}`;
//                   res.status(400).json({ dbError });
//                });
//          })
//          .catch((err) => {
//             // return a 400 error to user
//             //res.status(400).json({ emailError, passwordError });
//             console.log(err);
//             dbError = `${err.code} ${err.sqlMessage}`;
//             res.status(400).json({ dbError });
//          });
//    } else {
//       res.status(400).json({ emailError, passwordError });
//    }
// });

// // @route       POST api/v1/users/auth
// // @desc        Check this user against db via email and password
// // @access      Public
// router.post("/auth", async (req, res) => {
//    const { email, password } = req.body;
//    const emailError = getLoginEmailError(email);
//    const passwordError = await getLoginPasswordError(password, email);
//    console.log({ emailError, passwordError });
//    let dbError = "";
//    // no errors then do something
//    if (emailError === "" && passwordError === "") {
//       // return the user to the client
//       db.query(selectUserByEmail, email)
//          .then((users) => {
//             const user = users[0];
//             res.status(200).json({
//                id: user.id,
//                email: user.email,
//                createdAt: user.created_at,
//             });
//          })
//          .catch((err) => {
//             console.log(err);
//             dbError = `${err.code} ${err.sqlMessage}`;
//             res.status(400).json({ dbError });
//          });
//    } else {
//       res.status(400).json({ emailError, passwordError });
//    }
// });

// module.exports = router;
