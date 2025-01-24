const CrudRepository = require("./curd.repository");
const { Flight } = require("../models");
class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }
  //   async someRawQuery(){}
}

module.exports = FlightRepository;
