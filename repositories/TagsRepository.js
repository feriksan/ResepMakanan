
        const sequelize = require('../connection');
        const models = require('../models');

        class TagsRepository{
            constructor(){
            // TODO document why this constructor is empty
            }

            async create(obj){
                return await models.tags.create(obj);
            }

            async findById(TagID){
                let tags = await models.tags.findOne({
                    where:{"TagID":TagID},
                });
                return tags;
            }
            
            async findBy(field,value){
                let tags = await models.tags.findAll({
                    where:{[field]:value},
                });
                return tags;
            }
            
            async findAll(){
                let tags = await models.tags.findAll();
                return tags;
            }
            
            async findWithPaging(page,size){
                let tags = await models.tags.findAll({
                    offset: ((page-1)*size), limit: size,
                    order: [['TagID', 'ASC']]
                    });
                return tags;
            }
            
            async update(obj,TagID){
                await models.tags.update(obj,{
                        where:{
                            TagID:TagID
                        }
                    }
                );
            }
            async delete(TagID){
                await models.tags.destroy({
                        where:{
                            TagID:TagID
                        }
                    }
                );
            }
        }
        module.exports = TagsRepository;
    