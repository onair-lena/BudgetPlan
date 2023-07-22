const { Record } = require('../models');
const ApiError = require('../errors/ApiError');
const { ValidationError } = require('sequelize');

class RecordController {
  async create(req, res, next) {
    try {
      const { record_name, description, value, currency, type, date } =
        req.body;
      const record = await Record.create({
        record_name,
        description,
        value: value || 0,
        currency: currency || 'usd',
        type,
        date: date || Date.now(),
      });
      return res.json(record);
    } catch (err) {
      if (err instanceof ValidationError) {
        return next(ApiError.badRequest(err.errors[0].message));
      }
    }
  }

  async getAll(req, res) {
    let { limit, page } = req.query;

    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    const records = await Record.findAll({ limit, offset });
    return res.json(records);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const record = await Record.findOne({ where: { id } });
    return res.json(record);
  }
  async delete(req, res) {
    const { id } = req.params;
    const record = await Record.destroy({ where: { id } });
    return res.json(record);
  }
}

module.exports = new RecordController();
