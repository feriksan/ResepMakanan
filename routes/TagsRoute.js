
    
    
    const router = require('express').Router();
    const dotenv = require('dotenv');
    const req = require('express/lib/request');
    const models = require('../models');
    const fs = require('fs')
    
    const sequelize = require('../connection');
    const Tags = require('../services/tags/Tags');

    let tags = new Tags();

    router.post('/create',function(req,res){tags.create(req,res)});
    router.get('/findById/:TagID', function(req,res){tags.findById(req,res)});
    router.get('/findAll', function(req,res){tags.findAll(req,res)});
    router.get('/findBy/:field/:value', function(req,res){tags.findBy(req,res)});
    router.get('/findWithPaging/:page/:size', function(req,res){tags.findWithPaging(req,res)});
    router.put('/update/:TagID', function(req,res){tags.update(req,res)});
    router.delete('/delete/:TagID', function(req,res){tags.delete(req,res)});
    module.exports = router;
    