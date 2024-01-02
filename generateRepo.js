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
    fs.writeFileSync("repositories/"+classname+"Repository.js", data);
}

function buildClassRepo(tbl){
    let tb = tbl.tableName;
    let classname = toCamelCase(tbl.tableName);
    classname = classname.charAt(0).toUpperCase() + classname.slice(1);
    let id = tbl.id;

    let strClass = `
        const sequelize = require('../connection');
        const models = require('../models');

        class `+classname+`Repository{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(obj){
                return await models.`+tb+`.create(obj);
            }

            async findById(`+id+`){
                let `+tb+` = await models.`+tb+`.findOne({
                    where:{"`+id+`":`+id+`},
                });
                return `+tb+`;
            }
            
            async findBy(field,value){
                let `+tb+` = await models.`+tb+`.findAll({
                    where:{[field]:value},
                });
                return `+tb+`;
            }
            
            async findAll(){
                let `+tb+` = await models.`+tb+`.findAll();
                return `+tb+`;
            }
            
            async findWithPaging(page,size){
                let `+tb+` = await models.`+tb+`.findAll({
                    offset: ((page-1)*size), limit: size,
                    order: [['`+id+`', 'ASC']]
                    });
                return `+tb+`;
            }
            
            async update(obj,`+id+`){
                await models.`+tb+`.update(obj,{
                        where:{
                            `+id+`:`+id+`
                        }
                    }
                );
            }
            async delete(`+id+`){
                await models.`+tb+`.destroy({
                        where:{
                            `+id+`:`+id+`
                        }
                    }
                );
            }
        }
        module.exports = `+classname+`Repository;
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