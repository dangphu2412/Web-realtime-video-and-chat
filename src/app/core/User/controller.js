import { BaseController } from '../../concept/controller';
import { UserService } from './service';

class Controller extends BaseController {
  constructor() {
    super();
    this.service = UserService;
  }

  findAll(req) {
    const { query } = req;
    return this.service.findAll(query);
  }
}

export const UserController = new Controller();
