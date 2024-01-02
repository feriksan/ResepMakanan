
    
    
    const router = require('express').Router();
    const dotenv = require('dotenv');
    const req = require('express/lib/request');
    const models = require('../models');
    const fs = require('fs')
    
    const sequelize = require('../connection');
    const Recipeingredients = require('../services/recipeingredients/Recipeingredients');

    let recipeingredients = new Recipeingredients();

    router.post('/create',function(req,res){recipeingredients.create(req,res)});
    router.get('/findById/:RecipeID', function(req,res){recipeingredients.findById(req,res)});
    router.get('/findAll', function(req,res){recipeingredients.findAll(req,res)});
    router.get('/findBy/:field/:value', function(req,res){recipeingredients.findBy(req,res)});
    router.get('/findWithPaging/:page/:size', function(req,res){recipeingredients.findWithPaging(req,res)});
    router.put('/update/:RecipeID', function(req,res){recipeingredients.update(req,res)});
    router.delete('/delete/:RecipeID', function(req,res){recipeingredients.delete(req,res)});
    module.exports = router;
    