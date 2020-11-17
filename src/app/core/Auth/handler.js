import { Handler } from '../../concept/handler';
import { AuthController as controller } from './controller';

export class AuthHandler {
  static register(router) {
    Handler.registerRoutes(
      {
        router,
        prefixPath: '/api/auth',
      },
      [
        {
          route: '/v1/register',
          method: 'POST',
          controller: controller.createOne.bind(controller),
        },
        {
          route: '/v1/login',
          method: 'POST',
          controller: controller.login.bind(controller),
        },
      ],
    );
  }
}
