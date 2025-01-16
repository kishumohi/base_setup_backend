const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

// /api/v1/airplanes
router.post("/", AirplaneMiddlewares, AirplaneController.createAirplane);

module.exports = router;
