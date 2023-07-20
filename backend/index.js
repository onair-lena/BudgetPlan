require('dotenv').config();
const express = require('express');
const sequilize = require('./db');
const models = require('./models');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    await sequilize.authenticate(); //подключение к БД
    await sequilize.sync(); //сверяет состояние БД со схемой данных
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
