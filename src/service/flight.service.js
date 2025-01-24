const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const { FlightRepository, AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app.error.js");
const { query } = require("express");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const response = await flightRepository.create(data);
    return response;
  } catch (error) {
    // console.log(error.name);
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot Create A New Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAllFlights(query) {
  let customeFilter = {};
  const endingTripTime = " 23:59:00";
  // tripes = MUM-DEL
  if (query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customeFilter.departureAirportId = departureAirportId;
    customeFilter.arrivalAirportId = arrivalAirportId;
    // TODO: add a check that they are not same
  }
  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customeFilter.price = {
      [Op.between]: [minPrice, maxPrice === undefined ? 20000 : maxPrice],
    };
  }
  if (query.travellers) {
    customeFilter.totalSeats = {
      [Op.gte]: query.travellers,
    };
  }
  if (query.tripDate) {
    customeFilter.departureTime = {
      [Op.between]: [query.tripDate, query.tripDate + endingTripTime],
    };
  }
  try {
    const flights = await flightRepository.getAllFlights(customeFilter);
    return flights;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
  getAllFlights,
};
