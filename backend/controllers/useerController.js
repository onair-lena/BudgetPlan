const ApiError = require('../errors/ApiError');
//

class UserController {
  async registration(req, res) {}

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
