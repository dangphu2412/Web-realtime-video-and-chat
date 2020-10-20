import { BAD_REQUEST } from 'http-status';
import { HttpError } from './http.error';
import { ERROR } from '../../common/constants';

export class BadRequest extends HttpError {
  constructor(message = ERROR.BAD_REQUEST) {
    super(message, BAD_REQUEST);
  }
}
