const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');
const https = require("https")
const fs = require("fs");
const path = require("path")
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

https
    .createServer(
        {
            key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
            cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
          },
        app)
    .listen(1818, () => {
        console.log("Server Berjalan")
    })