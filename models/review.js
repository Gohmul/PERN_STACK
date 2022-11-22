"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Album, {
        foreignKey: "album_id",
        as: "album",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Review.init(
    {
      reviewerName: DataTypes.STRING,
      content: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      album_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "reviews",
    }
  );
  return Review;
};
