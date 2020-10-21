import express from 'express';
import { AuthHandler } from '../core/Auth/handler';
import { UserHandler } from '../core/User/handler';

const router = express.Router();

AuthHandler.register(router);
UserHandler.register(router);

export default router;
