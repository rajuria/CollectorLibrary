'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autores extends Model {
    static associate(models) {
        Autores.hasMany(models.Books, {foreignKey: 'AuthorID',as: 'Books'});
    }
  }
  Autores.init({
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    BirthYear: DataTypes.INTEGER,
    Nationality: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Autores',
  });
  return Autores;
};