
    
    
    const router = require('express').Router();
    const dotenv = require('dotenv');
    const req = require('express/lib/request');
    const models = require('../models');
    const fs = require('fs')
    
    const sequelize = require('../connection');
    const RecipeTags = require('../services/recipeTags/RecipeTags');

    let recipeTags = new RecipeTags();

    router.post('/create',function(req,res){recipeTags.create(req,res)});
    router.get('/findById/:RecipeID', function(req,res){recipeTags.findById(req,res)});
    router.get('/findAll', function(req,res){recipeTags.findAll(req,res)});
    router.get('/findBy/:field/:value', function(req,res){recipeTags.findBy(req,res)});
    router.get('/findWithPaging/:page/:size', function(req,res){recipeTags.findWithPaging(req,res)});
    router.put('/update/:RecipeID', function(req,res){recipeTags.update(req,res)});
    router.delete('/delete/:RecipeID', function(req,res){recipeTags.delete(req,res)});
    module.exports = router;
    