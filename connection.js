const Sequelize = require('sequelize');
console.log(process.env.name,process.env.user,process.env.host);
const sequelize = new Sequelize(process.env.name,process.env.user,process.env.password,{
    host:process.env.host,
    dialect : "mysql",
    operatorAliases:false,
    logging:console.log,
    pool:{
        max:5,min:0,acquire:30000,idle:10000
    }
});
module.exports =  sequelize;