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
    fs.mkdir("services/"+tb.tableName+"/",null,function(error){console.log(error)});
    fs.writeFileSync("services/"+tb.tableName+"/"+classname+".js", data);
}

function buildClassRepo(tbl){
    let tb = tbl.tableName;
    let classname = toCamelCase(tbl.tableName);
    classname = classname.charAt(0).toUpperCase() + classname.slice(1);
    let instancename = classname.charAt(0).toLocaleLowerCase() + classname.slice(1);
    let id = tbl.id;

    let strClass = `
    
    const uuid = require('uuid');
    const moment = require('moment');
    const sequelize = require('../../connection');
    const `+classname+`Repository = require('../../repositories/`+classname+`Repository');
    const `+instancename+`Repository = new `+classname+`Repository();
    

        class `+classname+`{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(req,res){
                let `+tb+` = await `+instancename+`Repository.create(req.body);
                return res.json(`+tb+`);
            }

            async findById(req,res){
                let `+tb+` = await `+instancename+`Repository.findById(req.params.`+id+`);
                return res.json(`+tb+`);
            }
            async findAll(req,res){
                let `+tb+` = await `+instancename+`Repository.findAll();
                return res.json(`+tb+`);
            }
            async findWithPaging(req,res){
                let `+tb+` = await `+instancename+`Repository.findWithPaging(req.params.page,req.params.size);
                return res.json(`+tb+`);
            }
            async findBy(req,res){
                let `+tb+` = await `+instancename+`Repository.findBy(req.params.field,req.params.value);
                return res.json(`+tb+`);
            }
            
            async update(req,res){
                await `+instancename+`Repository.update(req.body,req.params.`+id+`);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
            async delete(req,res){
                await `+instancename+`Repository.delete(req.params.`+id+`);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
        }
        module.exports = `+classname+`;
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