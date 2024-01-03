const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipes', {
    RecipeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    Title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PrepTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CookTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Servings: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'recipes',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RecipeID" },
        ]
      },
    ]
  });
};
