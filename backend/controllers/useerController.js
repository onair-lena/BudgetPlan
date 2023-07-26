const { where } = require('sequelize');
const ApiError = require('../errors/ApiError');
const bcrypt = require('bcrypt');
const { User, Record } = require('../models');
const jwt = require('jsonwebtoken');

const generateJWT = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

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
    const token = generateJWT(user.id, email);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest('User does not exist'));
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest('User does not exist'));
    }
    const token = generateJWT(user.id, user.email);
    return res.json({ token });
  }

  async isAuth(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('ID is missing'));
    }
    res.json(id);
  }
}

module.exports = new UserController();
