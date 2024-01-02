
    
    
    const router = require('express').Router();
    const dotenv = require('dotenv');
    const req = require('express/lib/request');
    const models = require('../models');
    const fs = require('fs')
    
    const sequelize = require('../connection');
    const Recipes = require('../services/recipes/Recipes');

    let recipes = new Recipes();

    router.post('/create',function(req,res){recipes.create(req,res)});
    router.get('/findById/:RecipeID', function(req,res){recipes.findById(req,res)});
    router.get('/findAll', function(req,res){recipes.findAll(req,res)});
    router.get('/findBy/:field/:value', function(req,res){recipes.findBy(req,res)});
    router.get('/findWithPaging/:page/:size', function(req,res){recipes.findWithPaging(req,res)});
    router.put('/update/:RecipeID', function(req,res){recipes.update(req,res)});
    router.delete('/delete/:RecipeID', function(req,res){recipes.delete(req,res)});
    module.exports = router;
    