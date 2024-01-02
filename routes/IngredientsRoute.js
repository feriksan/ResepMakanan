    const router = require('express').Router();
    const dotenv = require('dotenv');
    const req = require('express/lib/request');
    const models = require('../models');
    const fs = require('fs')
    
    const sequelize = require('../connection');
    const Ingredients = require('../services/ingredients/Ingredients');

    let ingredients = new Ingredients();

    router.post('/create',function(req,res){ingredients.create(req,res)});
    router.get('/findById/:IngredientID', function(req,res){ingredients.findById(req,res)});
    router.get('/findAll', function(req,res){ingredients.findAll(req,res)});
    router.get('/findBy/:field/:value', function(req,res){ingredients.findBy(req,res)});
    router.get('/findWithPaging/:page/:size', function(req,res){ingredients.findWithPaging(req,res)});
    router.put('/update/:IngredientID', function(req,res){ingredients.update(req,res)});
    router.delete('/delete/:IngredientID', function(req,res){ingredients.delete(req,res)});
    module.exports = router;
    