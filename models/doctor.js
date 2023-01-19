const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Doctor = sequelize.define("doctors", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	uid: {
		type: DataTypes.STRING,
    allowNull: false
	},
	doctor_name: {
		type: DataTypes.STRING,
    allowNull: false
  },
  doctor_name: {
		type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
	createdAt: {
		type: DataTypes.DATE,
	},
	updatedAt: {
		type: DataTypes.DATE,
	}
});

module.exports = Doctor;