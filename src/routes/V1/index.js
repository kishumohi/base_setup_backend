const express = require("express");

const { InfoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city.routes.js");
const router = express.Router();

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);

router.get("/info", InfoController.info);
module.exports = router;
