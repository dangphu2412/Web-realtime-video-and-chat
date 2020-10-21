import { BaseService } from '../../concept/service';
import { UserRepository } from './repository';

class Service extends BaseService {
  constructor() {
    super();
    this.repository = UserRepository;
  }

  findAll(query) {
    return this.repository.findAll(query);
  }
}

export const UserService = new Service();
