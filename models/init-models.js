var DataTypes = require("sequelize").DataTypes;
var _ingredients = require("./ingredients");
var _recipeingredients = require("./recipeingredients");
var _recipes = require("./recipes");
var _recipetags = require("./recipetags");
var _tags = require("./tags");

function initModels(sequelize) {
  var ingredients = _ingredients(sequelize, DataTypes);
  var recipeingredients = _recipeingredients(sequelize, DataTypes);
  var recipes = _recipes(sequelize, DataTypes);
  var recipetags = _recipetags(sequelize, DataTypes);
  var tags = _tags(sequelize, DataTypes);

  ingredients.belongsToMany(recipes, { as: 'RecipeID_recipes', through: recipeingredients, foreignKey: "IngredientID", otherKey: "RecipeID" });
  recipes.belongsToMany(ingredients, { as: 'IngredientID_ingredients', through: recipeingredients, foreignKey: "RecipeID", otherKey: "IngredientID" });
  recipes.belongsToMany(tags, { as: 'TagID_tags', through: recipetags, foreignKey: "RecipeID", otherKey: "TagID" });
  tags.belongsToMany(recipes, { as: 'RecipeID_recipes_recipetags', through: recipetags, foreignKey: "TagID", otherKey: "RecipeID" });
  recipeingredients.belongsTo(ingredients, { as: "Ingredient", foreignKey: "IngredientID"});
  ingredients.hasMany(recipeingredients, { as: "recipeingredients", foreignKey: "IngredientID"});
  recipeingredients.belongsTo(recipes, { as: "Recipe", foreignKey: "RecipeID"});
  recipes.hasMany(recipeingredients, { as: "recipeingredients", foreignKey: "RecipeID"});
  recipetags.belongsTo(recipes, { as: "Recipe", foreignKey: "RecipeID"});
  recipes.hasMany(recipetags, { as: "recipetags", foreignKey: "RecipeID"});
  recipetags.belongsTo(tags, { as: "Tag", foreignKey: "TagID"});
  tags.hasMany(recipetags, { as: "recipetags", foreignKey: "TagID"});

  return {
    ingredients,
    recipeingredients,
    recipes,
    recipetags,
    tags,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
