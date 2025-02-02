const { AirplaneService } = require("../service");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /airplanes
 * req-body {modelnumber:"airbus320, capacity:200"}
 */
async function createAirplane(req, res) {
  try {
    // console.log("Inside :: createAirplane Controller");
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplaines = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplaines;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
/**
 * POST : /airplanes/:id
 * req-body {}
 */
async function getAirplane(req, res) {
  try {
    const airplaines = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = airplaines;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE : /airplanes/:id
 * req-body {}
 */
async function destroyAirplane(req, res) {
  try {
    const airplaines = await AirplaneService.destroyAirplane(req.params.id);
    SuccessResponse.data = airplaines;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateAirplane(req, res) {
  try {
    const airplane = await AirplaneService.updateAirplane(req.params.id, {
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
