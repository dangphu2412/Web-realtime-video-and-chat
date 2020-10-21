import { Conflict, JwtStrategy, NotFound } from '../../../utils';
import { bcryptService } from '../../../plugin';
import { BaseService } from '../../concept/service';
import { UserRepository } from '../User/repository';

class Service extends BaseService {
  constructor() {
    super();
    this.repository = UserRepository;
    this.bcryptService = bcryptService;
    this.jwtService = JwtStrategy;
  }

  getUserResponse(user) {
    const token = this.jwtService.sign({
      payload: {
        userId: user.id,
      },
    });
    return {
      token,
      info: this.repository.toUserResponse(user),
    };
  }

  async createOne(body) {
    const found = await this.repository.findByEmail(body.email);
    if (found) {
      throw new NotFound('This email has been registed');
    }
    const user = await this.repository.createOne(body);
    return this.getUserResponse(user);
  }

  async login(body) {
    const user = await this.repository.findByEmail(body.email);
    if (!user) {
      throw new NotFound('Not found this user');
    }
    if (this.bcryptService.compareSync(user.password, body.password)) {
      throw new Conflict('Your password is not right');
    }
    return this.getUserResponse(user);
  }
}

export const AuthService = new Service();
