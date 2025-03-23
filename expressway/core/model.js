const sequelize = require('../database/config');
const { DataTypes, Model: SequelizeModel } = require('sequelize');

class Model extends SequelizeModel {
  static initModel(attributes, options = {}) {
    super.init(attributes, {
      sequelize,
      modelName: this.name,
      ...options,
    });
  }
}

module.exports = {
  Model,
  DataTypes,
  sequelize,
};
