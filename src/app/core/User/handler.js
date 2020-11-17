import { Handler } from '../../concept/handler';
import { UserController as controller } from './controller';

export class UserHandler {
  static register(router) {
    Handler.registerRoutes(
      {
        router,
        prefixPath: '/api/users',
      },
      [
        {
          route: '/v1',
          method: 'GET',
          controller: controller.findAll.bind(controller),
        },
      ],
    );
  }
}
