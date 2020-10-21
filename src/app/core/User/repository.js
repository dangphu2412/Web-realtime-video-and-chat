import { User } from '../../../models';
import { BaseRepository } from '../../concept/repository';

class Repository extends BaseRepository {
  constructor() {
    super();
    this.model = User;
  }

  createOne(dto) {
    return this.model.create(dto);
  }

  findAll(query) {
    return this.model
      .find()
      .limit(parseInt(query.limit, 10))
      .skip(parseInt(query.offset, 10));
  }

  findByEmail(email) {
    return this.model.findOne({
      email,
    });
  }

  toUserResponse(user) {
    return {
      _id: user._id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
    };
  }
}

export const UserRepository = new Repository();
