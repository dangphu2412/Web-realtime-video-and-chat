import { FORBIDDEN } from 'http-status';
import { HttpError } from './http.error';
import { ERROR } from '../../common/constants';

export class Forbidden extends HttpError {
  constructor(message = ERROR.FORBIDDEN) {
    super(message, FORBIDDEN);
  }
}
