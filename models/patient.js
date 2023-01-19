const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Doctor = sequelize.define("patients", {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
	},
	uid: {
		type: DataTypes.STRING,
    allowNull: false
	},
  patient_name: {
		type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    primaryKey: true,
  },
	createdAt: {
		type: DataTypes.DATE,
	},
	updatedAt: {
		type: DataTypes.DATE,
	}
});

module.exports = Doctor;