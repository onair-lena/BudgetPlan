const sequilize = require('./db');

const { DataTypes } = require('sequelize');

const User = sequilize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Record = sequilize.define('record', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  record_name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  value: { type: DataTypes.INTEGER },
  currency: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  date: { type: DataTypes.DATE },
});

User.hasMany(Record);
Record.belongsTo(User);

module.exports = {
  User,
  Record,
};
