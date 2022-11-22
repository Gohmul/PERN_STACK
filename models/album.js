"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Album.belongsTo(models.Artist, {
        foreignKey: "artist_id",
        as: "artist",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Album.hasMany(models.Review, {
        foreignKey: "album_id",
        as: "album",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Album.init(
    {
      title: DataTypes.STRING,
      numOfTracks: DataTypes.INTEGER,
      genre: DataTypes.STRING,
      artist_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Album",
      tableName: "albums",
    }
  );
  return Album;
};
