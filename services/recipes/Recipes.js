
    
    const uuid = require('uuid');
    const moment = require('moment');
    const sequelize = require('../../connection');
    const RecipesRepository = require('../../repositories/RecipesRepository');
    const recipesRepository = new RecipesRepository();
    

        class Recipes{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(req,res){
                let recipes = await recipesRepository.create(req.body);
                return res.json(recipes);
            }

            async findById(req,res){
                let recipes = await recipesRepository.findById(req.params.RecipeID);
                return res.json(recipes);
            }
            async findAll(req,res){
                let recipes = await recipesRepository.findAll();
                return res.json(recipes);
            }
            async findWithPaging(req,res){
                let recipes = await recipesRepository.findWithPaging(req.params.page,req.params.size);
                return res.json(recipes);
            }
            async findBy(req,res){
                let recipes = await recipesRepository.findBy(req.params.field,req.params.value);
                return res.json(recipes);
            }
            
            async update(req,res){
                await recipesRepository.update(req.body,req.params.RecipeID);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
            async delete(req,res){
                await recipesRepository.delete(req.params.RecipeID);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
        }
        module.exports = Recipes;
    