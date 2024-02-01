const { Sequelize } = require('sequelize');
// import Sequelize from 'sequelize';

// Create a Sequelize instance
const db = new Sequelize(process.env.MYSQL_DB, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
});

// Test the connection
async function testConnection() {
    try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

// testConnection()

module.exports = db