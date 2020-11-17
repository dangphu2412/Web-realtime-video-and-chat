import { Conversation } from '../../../models';
import { BaseRepository } from '../../concept/repository';

class Repository extends BaseRepository {
  constructor() {
    super();
    this.model = Conversation;
  }

  createOne(dto) {
    return this.model.create(dto);
  }
}

export const ConversationRepository = new Repository();
