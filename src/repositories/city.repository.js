const CrudRepository = require("./curd.repository");
const { City } = require("../models");
class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }
  //   async someRawQuery(){}
}

module.exports = CityRepository;
