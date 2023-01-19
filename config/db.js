const Sequelize = require("sequelize");

// const databaseInstance = new Sequelize('clinic', 'smart', 'smart', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

const databaseInstance = new Sequelize('clinic', 'smart', 'smart', {
	host: process.env.DB_HOST,
	dialect: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 3000,
		idle: 10000,
	}
});
module.exports = databaseInstance; 