const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipetags', {
    RecipeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recipes',
        key: 'RecipeID'
      }
    },
    TagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tags',
        key: 'TagID'
      }
    }
  }, {
    sequelize,
    tableName: 'recipetags',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RecipeID" },
          { name: "TagID" },
        ]
      },
      {
        name: "TagID",
        using: "BTREE",
        fields: [
          { name: "TagID" },
        ]
      },
    ]
  });
};
