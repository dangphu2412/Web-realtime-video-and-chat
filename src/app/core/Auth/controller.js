import { BaseController } from '../../concept/controller';
import { AuthService } from './service';

class Controller extends BaseController {
  constructor() {
    super();
    this.service = AuthService;
  }

  createOne(req) {
    const { body } = req;
    return this.service.createOne(body);
  }

  login(req) {
    const { body } = req;
    return this.service.login(body);
  }
}

export const AuthController = new Controller();
