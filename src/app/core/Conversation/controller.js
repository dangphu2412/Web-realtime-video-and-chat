import { BaseController } from '../../concept/controller';
import { ConversationService } from './service';

class Controller extends BaseController {
  constructor() {
    super();
    this.service = ConversationService;
  }
}

export const ConversationController = new Controller();
