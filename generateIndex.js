const fs = require('fs');

const table = [
    { tableName: 'recipes', id: 'RecipeID' },
    { tableName: 'ingredients', id: 'IngredientID' },
    { tableName: 'recipeingredients', id: 'RecipeID' },
    { tableName: 'recipeTags', id: 'RecipeID' },
    { tableName: 'tags', id: 'TagID' },
  ];

for(var tb of table) {
    let data = callRouteIndex(tb);
    let classname = toCamelCase(tb.tableName);
    classname = classname.charAt(0).toUpperCase() + classname.slice(1);
    fs.appendFileSync("index.js", data);
}

for(var tb of table) {
    let apiData = generateRouteCall(tb);
    let classname = toCamelCase(tb.tableName);
    classname = classname.charAt(0).toUpperCase() + classname.slice(1);
    fs.appendFileSync("index.js", apiData);
}

function callRouteIndex(tbl){
    let classname = toCamelCase(tbl.tableName);
    classname = classname.charAt(0).toUpperCase() + classname.slice(1);
    let strClass = `
const `+classname+`Route = require('./routes/`+classname+`Route');`
    return strClass
}

function generateRouteCall(tbl){
    let classname = toCamelCase(tbl.tableName);
    classname = classname.charAt(0).toUpperCase() + classname.slice(1);
    let strClass = `
app.use('/api/`+classname+`',`+classname+`Route);`
    return strClass;
}


function toCamelCase(str){
    let newStr = "";
    if(str){
      let wordArr = str.split(/[-_]/g);
      for (let i in wordArr){
        if(i > 0){
          newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        }else{
          newStr += wordArr[i]
        }
      }
    }else{
      return newStr
    }
    return newStr;
  }