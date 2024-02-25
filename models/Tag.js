const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // Forcing the data we pass to be an int
      allowNull: false, // Force us to pass an id
      primaryKey: true, // allow us to make associations within our database
      autoIncrement: true, // this allows us to auto create the id
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false, 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
