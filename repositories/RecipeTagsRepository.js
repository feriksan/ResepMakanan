
        const sequelize = require('../connection');
        const models = require('../models');

        class RecipeTagsRepository{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(obj){
                return await models.recipetags.create(obj);
            }

            async findById(RecipeID){
                let recipeTags = await models.recipetags.findOne({
                    where:{"RecipeID":RecipeID},
                });
                return recipeTags;
            }
            
            async findBy(field,value){
                let recipeTags = await models.recipetags.findAll({
                    where:{[field]:value},
                    include:[{
                        model: models.recipes,
                        as : 'Recipe',
                    },{
                        model: models.tags,
                        as : 'Tag',
                        }]
                });
                return recipeTags;
            }
            
            async findAll(){
                let recipeTags = await models.recipetags.findAll();
                return recipeTags;
            }
            
            async findWithPaging(page,size){
                let recipeTags = await models.recipetags.findAll({
                    offset: ((page-1)*size), limit: size,
                    order: [['RecipeID', 'ASC']]
                    });
                return recipeTags;
            }
            
            async update(obj,RecipeID){
                await models.recipetags.update(obj,{
                        where:{
                            RecipeID:RecipeID
                        }
                    }
                );
            }
            async delete(RecipeID){
                await models.recipetags.destroy({
                        where:{
                            RecipeID:RecipeID
                        }
                    }
                );
            }
        }
        module.exports = RecipeTagsRepository;
    