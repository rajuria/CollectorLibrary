'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    static associate(models) {
      Books.belongsTo(models.Autores, { foreignKey: 'AuthorID', as: 'Author' });
      Books.hasOne(models.ReadingStatuses, {foreignKey: 'BookID',as: 'ReadingStatuses'});
    }
  }
  Books.init({
    Title: DataTypes.STRING,
    AuthorID: DataTypes.INTEGER,
    Genre: DataTypes.STRING,
    PublicationYear: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    PageCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};