'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Books.belongsTo(models.Autores, { foreignKey: 'AuthorID' });
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