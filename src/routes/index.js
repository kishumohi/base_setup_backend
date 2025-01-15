const express = require("express");
const v1Routes = require("./V1");
const router = express.Router();

console.log("Inside :: v1 routes");
router.use("/v1", v1Routes);
module.exports = router;
