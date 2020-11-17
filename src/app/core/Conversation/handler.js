import { Handler } from '../../concept/handler';
import { ConversationController as controller } from './controller';

export class ConversationHandler {
  static register(router) {
    Handler.registerRoutes(
      {
        router,
        prefixPath: '/api/Conversations',
      },
      [
      ],
    );
  }
}
