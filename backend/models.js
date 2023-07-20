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

const Currency = sequilize.define('currencyName', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
  code: { type: DataTypes.STRING, unique: true },
});

const RecordType = sequilize.define('recordType', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
});

User.hasMany(Record);
Record.belongsTo(User);

Record.hasOne(RecordType);
RecordType.belongsTo(Record);

Record.hasOne(Currency);
Currency.belongsTo(Record);

module.exports = {
  User,
  Record,
  RecordType,
  Currency,
};
