class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async isAuth(req, res) {
    const { id } = req.query;
    res.json(id);
  }
}

module.exports = new UserController();
