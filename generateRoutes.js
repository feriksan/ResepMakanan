const fs = require('fs');

const table = [
    { tableName: 'recipes', id: 'RecipeID' },
    { tableName: 'ingredients', id: 'IngredientID' },
    { tableName: 'recipeingredients', id: 'RecipeID' },
    { tableName: 'recipeTags', id: 'RecipeID' },
    { tableName: 'tags', id: 'TagID' },
  ];

for(var tb of table) {
    let data = buildClassRepo(tb);
    let classname = toCamelCase(tb.tableName);
    classname = classname.charAt(0).toUpperCase() + classname.slice(1);
    fs.writeFileSync("routes/"+classname+"Route.js", data);
}

function buildClassRepo(tbl){
    let tb = tbl.tableName;
    let classname = toCamelCase(tbl.tableName);
    classname = classname.charAt(0).toUpperCase() + classname.slice(1);
    let instancename = classname.charAt(0).toLocaleLowerCase() + classname.slice(1);
    let id = tbl.id;

    let strClass = `
    
    
    const router = require('express').Router();
    const dotenv = require('dotenv');
    const req = require('express/lib/request');
    const models = require('../models');
    const fs = require('fs')
    
    const sequelize = require('../connection');
    const `+classname+` = require('../services/`+tb+`/`+classname+`');

    let `+instancename+` = new `+classname+`();

    router.post('/create',function(req,res){`+instancename+`.create(req,res)});
    router.get('/findById/:`+id+`', function(req,res){`+instancename+`.findById(req,res)});
    router.get('/findAll', function(req,res){`+instancename+`.findAll(req,res)});
    router.get('/findBy/:field/:value', function(req,res){`+instancename+`.findBy(req,res)});
    router.get('/findWithPaging/:page/:size', function(req,res){`+instancename+`.findWithPaging(req,res)});
    router.put('/update/:`+id+`', function(req,res){`+instancename+`.update(req,res)});
    router.delete('/delete/:`+id+`', function(req,res){`+instancename+`.delete(req,res)});
    module.exports = router;
    `
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