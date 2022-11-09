'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GenreMovie extends Model {
       static associate(models) {
    }
  }
  GenreMovie.init({
    MovieId: DataTypes.INTEGER,
    GenreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GenreMovie',
  });
  return GenreMovie;
};