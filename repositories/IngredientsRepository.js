
        const sequelize = require('../connection');
        const models = require('../models');
        const { v4: uuidv4 } = require('uuid');

        class IngredientsRepository{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(obj){
                obj.IngredientID = uuidv4();
                return await models.ingredients.create(obj);
            }

            async findById(IngredientID){
                let ingredients = await models.ingredients.findOne({
                    where:{"IngredientID":IngredientID},
                });
                return ingredients;
            }
            
            async findBy(field,value){
                let ingredients = await models.ingredients.findAll({
                    where:{[field]:value},
                });
                return ingredients;
            }
            
            async findAll(){
                let ingredients = await models.ingredients.findAll();
                return ingredients;
            }
            
            async findWithPaging(page,size){
                let ingredients = await models.ingredients.findAll({
                    offset: ((page-1)*size), limit: size,
                    order: [['IngredientID', 'ASC']]
                    });
                return ingredients;
            }
            
            async update(obj,IngredientID){
                await models.ingredients.update(obj,{
                        where:{
                            IngredientID:IngredientID
                        }
                    }
                );
            }
            async delete(IngredientID){
                await models.ingredients.destroy({
                        where:{
                            IngredientID:IngredientID
                        }
                    }
                );
            }
        }
        module.exports = IngredientsRepository;
    