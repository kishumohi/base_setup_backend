const { Logger } = require("../config");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log("Inside :: CrudRepo");
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error(
        `Something went wrong in the Crud Repo : Create in Model is ${this.model}`
      );
      throw error;
    }
  }
  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error(
        `Something went wrong in the Crud Repo : destroy in Model is ${this.model}`
      );
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error(
        `Something went wrong in the Crud Repo : get in Model is ${this.model}`
      );
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error(
        `Something went wrong in the Crud Repo : getAll in Model is ${this.model}`
      );
      throw error;
    }
  }

  async update(id, data) {
    // data -> {col : value, ...}
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error(
        `Something went wrong in the Crud Repo : update in Model is ${this.model}`
      );
      throw error;
    }
  }
}

module.exports = CrudRepository;
