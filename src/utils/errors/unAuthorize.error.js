import { UNAUTHORIZED } from 'http-status';
import { HttpError } from './http.error';
import { ERROR } from '../../common/constants';

export class UnAuthorized extends HttpError {
  constructor(message = ERROR.UNAUTHORIZED) {
    super(message, UNAUTHORIZED);
  }
}
