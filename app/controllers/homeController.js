const Controller = require('../../expressway/core/controller');

class HomeController extends Controller {
  index(req, res) {
    this.render(res, 'home', { message: 'Welcome to Expressway Framework!' });
  }
}

module.exports = new HomeController();
