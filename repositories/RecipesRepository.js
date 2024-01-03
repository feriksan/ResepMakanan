
        const sequelize = require('../connection');
        const models = require('../models');
        const { v4: uuidv4 } = require('uuid');

        class RecipesRepository{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(obj){
                obj.RecipeID = uuidv4();
                console.log(uuidv4())
                return await models.recipes.create(obj);
            }

            async findById(RecipeID){
                let recipes = await models.recipes.findOne({
                    where:{"RecipeID":RecipeID},
                });
                return recipes;
            }
            
            async findBy(field,value){
                let recipes = await models.recipes.findAll({
                    where:{[field]:value},
                });
                return recipes;
            }
            
            async findAll(){
                let recipes = await models.recipes.findAll({
                    order: [['CreatedAt', 'ASC']]
                });
                return recipes;
            }
            
            async findWithPaging(page,size){
                let recipes = await models.recipes.findAll({
                    offset: ((page-1)*size), limit: size,
                    order: [['RecipeID', 'ASC']]
                    });
                return recipes;
            }
            
            async update(obj,RecipeID){
                await models.recipes.update(obj,{
                        where:{
                            RecipeID:RecipeID
                        }
                    }
                );
            }
            async delete(RecipeID){
                await models.recipes.destroy({
                        where:{
                            RecipeID:RecipeID
                        }
                    }
                );
            }
        }
        module.exports = RecipesRepository;
    