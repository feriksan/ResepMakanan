
    
    const uuid = require('uuid');
    const moment = require('moment');
    const sequelize = require('../../connection');
    const RecipeTagsRepository = require('../../repositories/RecipeTagsRepository');
    const recipeTagsRepository = new RecipeTagsRepository();
    

        class RecipeTags{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(req,res){
                let recipeTags = await recipeTagsRepository.create(req.body);
                return res.json(recipeTags);
            }

            async findById(req,res){
                let recipeTags = await recipeTagsRepository.findById(req.params.RecipeID);
                return res.json(recipeTags);
            }
            async findAll(req,res){
                let recipeTags = await recipeTagsRepository.findAll();
                return res.json(recipeTags);
            }
            async findWithPaging(req,res){
                let recipeTags = await recipeTagsRepository.findWithPaging(req.params.page,req.params.size);
                return res.json(recipeTags);
            }
            async findBy(req,res){
                let recipeTags = await recipeTagsRepository.findBy(req.params.field,req.params.value);
                return res.json(recipeTags);
            }
            
            async update(req,res){
                await recipeTagsRepository.update(req.body,req.params.RecipeID);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
            async delete(req,res){
                await recipeTagsRepository.delete(req.params.RecipeID);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
        }
        module.exports = RecipeTags;
    