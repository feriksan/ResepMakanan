
    
    const uuid = require('uuid');
    const moment = require('moment');
    const sequelize = require('../../connection');
    const IngredientsRepository = require('../../repositories/IngredientsRepository');
    const ingredientsRepository = new IngredientsRepository();
    

        class Ingredients{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(req,res){
                let ingredients = await ingredientsRepository.create(req.body);
                return res.json(ingredients);
            }

            async findById(req,res){
                let ingredients = await ingredientsRepository.findById(req.params.IngredientID);
                return res.json(ingredients);
            }
            async findAll(req,res){
                let ingredients = await ingredientsRepository.findAll();
                return res.json(ingredients);
            }
            async findWithPaging(req,res){
                let ingredients = await ingredientsRepository.findWithPaging(req.params.page,req.params.size);
                return res.json(ingredients);
            }
            async findBy(req,res){
                let ingredients = await ingredientsRepository.findBy(req.params.field,req.params.value);
                return res.json(ingredients);
            }
            
            async update(req,res){
                await ingredientsRepository.update(req.body,req.params.IngredientID);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
            async delete(req,res){
                await ingredientsRepository.delete(req.params.IngredientID);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
        }
        module.exports = Ingredients;
    