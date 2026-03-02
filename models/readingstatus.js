'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadingStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReadingStatus.belongsTo(models.Books, { foreignKey: 'BookID' });
    }
  }
  ReadingStatus.init({
    BookID: DataTypes.INTEGER,
    Status: DataTypes.STRING,
    DateStarted: DataTypes.DATE,
    DateFinished: DataTypes.DATE,
    Rating: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ReadingStatus',
  });
  return ReadingStatus;
};