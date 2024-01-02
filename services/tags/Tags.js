
    
    const uuid = require('uuid');
    const moment = require('moment');
    const sequelize = require('../../connection');
    const TagsRepository = require('../../repositories/TagsRepository');
    const tagsRepository = new TagsRepository();
    

        class Tags{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(req,res){
                let tags = await tagsRepository.create(req.body);
                return res.json(tags);
            }

            async findById(req,res){
                let tags = await tagsRepository.findById(req.params.TagID);
                return res.json(tags);
            }
            async findAll(req,res){
                let tags = await tagsRepository.findAll();
                return res.json(tags);
            }
            async findWithPaging(req,res){
                let tags = await tagsRepository.findWithPaging(req.params.page,req.params.size);
                return res.json(tags);
            }
            async findBy(req,res){
                let tags = await tagsRepository.findBy(req.params.field,req.params.value);
                return res.json(tags);
            }
            
            async update(req,res){
                await tagsRepository.update(req.body,req.params.TagID);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
            async delete(req,res){
                await tagsRepository.delete(req.params.TagID);
                return res.json({
                    status:0,
                    msg:"success"
                });
            }
        }
        module.exports = Tags;
    