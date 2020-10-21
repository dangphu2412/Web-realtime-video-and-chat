import { BaseController } from '../../concept/controller';
import { UserService } from './service';

class Controller extends BaseController {
  constructor() {
    super();
    this.service = UserService;
  }

  findAll(req) {
    return this.service.findAll(req);
  }
}

export const UserController = new Controller();
