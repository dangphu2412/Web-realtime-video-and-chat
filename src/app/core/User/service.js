import { BaseService } from '../../concept/service';
import { UserRepository } from './repository';

class Service extends BaseService {
  constructor() {
    super();
    this.repository = UserRepository;
  }

  findAll(req) {
    return this.repository.findAll();
  }
}

export const UserService = new Service();
