const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

const router = express.Router();

// /api/v1/cities POST
router.post("/", CityMiddlewares, CityController.createCity);

// /api/v1/cities GET
router.get("/", CityController.getCities);

// /api/v1/cities GET
router.get("/:id", CityController.getCity);

// /api/v1/cities DELETE
router.delete("/:id", CityController.destroyCity);

// /api/v1/cities PATCH
router.patch("/:id", CityController.updateCity);

module.exports = router;
