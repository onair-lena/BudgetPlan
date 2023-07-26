const { where } = require('sequelize');
const ApiError = require('../errors/ApiError');
const bcrypt = require('bcrypt');
const { User, Record } = require('../models');
const jwt = require('jsonwebtoken');

class UserController {
  async registration(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Email or password cannot be empty'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('User with this email already exist'));
    }
    const hashPAssword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPAssword });
    const token = jwt.sign({ id: user.id, email }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
    return res.json({ token });
  }

  async login(req, res) {}

  async isAuth(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('ID is missing'));
    }
    res.json(id);
  }
}

module.exports = new UserController();
