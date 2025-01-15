const { AirplaneService } = require("../service");
const { StatusCodes } = require("http-status-codes");
/**
 * POST : /airplanes
 * req-body {modelnumber:"airbus320, capacity:200"}
 */
async function createAirplane(req, res) {
  try {
    console.log("Inside :: createAirplane Controller");
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      sucess: true,
      message: "Successfully create an airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      sucess: false,
      message: "Something went wrong while creating airpalne",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirplane,
};
