const express = require("express");
const app = express();
const path = require("path");
var cors = require("cors");
// need to use if you have multiple microserve apps
app.use(cors());

app.use("/api/v1/users", require("./api/v1/users"));
app.use("/api/v1/lipsticks", require("./api/v1/lipsticks"));
app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 5000;

app.listen(port, () =>
   console.log(`Server running at http://localhost:${port}`)
);
