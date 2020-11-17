import { BaseService } from '../../concept/service';
import { ConversationRepository } from './repository';

class Service extends BaseService {
  constructor() {
    super();
    this.repository = ConversationRepository;
  }
}

export const ConversationService = new Service();
