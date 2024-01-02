const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipeingredients', {
    RecipeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recipes',
        key: 'RecipeID'
      }
    },
    IngredientID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingredients',
        key: 'IngredientID'
      }
    },
    Quantity: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    Unit: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'recipeingredients',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RecipeID" },
          { name: "IngredientID" },
        ]
      },
      {
        name: "IngredientID",
        using: "BTREE",
        fields: [
          { name: "IngredientID" },
        ]
      },
    ]
  });
};
