const { Sequelize } = require('sequelize');
// import Sequelize from 'sequelize';

// Create a Sequelize instance
const db = new Sequelize('tiktok_db', 'root', '123123123', {
  host: '127.0.0.1',
  port: 3306,
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