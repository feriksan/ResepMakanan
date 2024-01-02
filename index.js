const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');
var methodOverride = require('method-override');


const app = express();
dotenv.config();

global.appRoot = __dirname

app.use(express.json());
app.use(methodOverride('_method'))
app.use(cors());

const RecipesRoute = require('./routes/RecipesRoute');
const IngredientsRoute = require('./routes/IngredientsRoute');
const RecipeingredientsRoute = require('./routes/RecipeingredientsRoute');
const RecipeTagsRoute = require('./routes/RecipeTagsRoute');
const TagsRoute = require('./routes/TagsRoute');

app.use('/api/Recipes',RecipesRoute);
app.use('/api/Ingredients',IngredientsRoute);
app.use('/api/Recipeingredients',RecipeingredientsRoute);
app.use('/api/RecipeTags',RecipeTagsRoute);
app.use('/api/Tags',TagsRoute);

app.listen(1818);