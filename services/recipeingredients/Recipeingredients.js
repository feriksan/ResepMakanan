
    
    const uuid = require('uuid');
    const moment = require('moment');
    const sequelize = require('../../connection');
    const RecipeingredientsRepository = require('../../repositories/RecipeingredientsRepository');
    const recipeingredientsRepository = new RecipeingredientsRepository();
    

        class Recipeingredients{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(req,res){
                let recipeingredients = await recipeingredientsRepository.create(req.body);
                return res.json(recipeingredients);
            }

            async findById(req,res){
                let recipeingredients = await recipeingredientsRepository.findById(req.params.RecipeID);
                return res.json(recipeingredients);
            }
            async findAll(req,res){
                let recipeingredients = await recipeingredientsRepository.findAll();
                return res.json(recipeingredients);
            }
            async findWithPaging(req,res){
                let recipeingredients = await recipeingredientsRepository.findWithPaging(req.params.page,req.params.size);
                return res.json(recipeingredients);
            }
            async findBy(req,res){
                let recipeingredients = await recipeingredientsRepository.findBy(req.params.field,req.params.value);
                return res.json(recipeingredients);
            }
            
            async update(req,res){
                await recipeingredientsRepository.update(req.body,req.params.RecipeID);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
            async delete(req,res){
                await recipeingredientsRepository.delete(req.params.RecipeID);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
        }
        module.exports = Recipeingredients;
    