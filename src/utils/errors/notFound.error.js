import { NOT_FOUND } from 'http-status';
import { HttpError } from './http.error';
import { ERROR } from '../../common/constants';

export class NotFound extends HttpError {
  constructor(message = ERROR.NOT_FOUND) {
    super(message, NOT_FOUND);
  }
}
