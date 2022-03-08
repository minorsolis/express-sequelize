const Sequalize = require('sequelize');
require('dotenv').config()

const LocationModel = require('./models/locations');

const sequelize = new Sequalize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PWD,{
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	dialect: process.env.DB_TYPE
});

const Location = LocationModel(sequelize, Sequalize);

sequelize.sync({force: false}).then(()=>{
	console.log("Sync done!");
});

module.exports = {
	Location
}