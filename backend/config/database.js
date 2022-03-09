const { Sequelize } = require("sequelize");

const CONFIG = {
  host    : "localhost",  
  port    : "5432",       
  dialect: 'postgres'

}
const DB_USER = "postgres";
const DB_NAME = "crud";
const DB_PASS = "postgres";
 
const db = new Sequelize( DB_NAME, DB_USER, DB_PASS, CONFIG );
 
exports.db = db;