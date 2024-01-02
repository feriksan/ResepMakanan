
        const sequelize = require('../connection');
        const models = require('../models');

        class RecipeingredientsRepository{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(obj){
                return await models.recipeingredients.create(obj);
            }

            async findById(RecipeID){
                let recipeingredients = await models.recipeingredients.findOne({
                    where:{"RecipeID":RecipeID},
                });
                return recipeingredients;
            }
            
            async findBy(field,value){
                let recipeingredients = await models.recipes.findAll({
                    where:{[field]:value},
                    include:[{
                        model: models.recipeingredients,
                        include: {
                            model: models.ingredients,
                            as: 'Ingredient',
                            attributes:['Name', 'Description']
                        },
                        as : 'recipeingredients',
                        attributes:['Quantity', 'Unit']
                        }],
                });
                return recipeingredients;
            }
            
            async findAll(){
                let recipeingredients = await models.recipeingredients.findAll();
                return recipeingredients;
            }
            
            async findWithPaging(page,size){
                let recipeingredients = await models.recipeingredients.findAll({
                    offset: ((page-1)*size), limit: size,
                    order: [['RecipeID', 'ASC']]
                    });
                return recipeingredients;
            }
            
            async update(obj,RecipeID){
                await models.recipeingredients.update(obj,{
                        where:{
                            RecipeID:RecipeID
                        }
                    }
                );
            }
            async delete(RecipeID){
                await models.recipeingredients.destroy({
                        where:{
                            RecipeID:RecipeID
                        }
                    }
                );
            }
        }
        module.exports = RecipeingredientsRepository;
    