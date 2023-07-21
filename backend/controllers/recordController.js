const { Record } = require('../models');
const ApiError = require('../errors/ApiError');

class RecordController {
  async create(req, res) {
    const { record_name } = req.body;
    const record = await Record.create({ record_name });
    return res.json(record);
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
