import express from 'express';
import logger from 'morgan';
import methodOverride from 'method-override';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { NOT_FOUND } from 'http-status';

import { errorHandler } from '../utils/errors';
import { swaggerConfig } from './swagger';
import initRoutes from '../app/routes';
import { mongoConnection } from './database';

export class App {
  /**
   *
   * @param {import('express').Router} app
   * @param {*} environment
   */
  constructor(app, environment) {
    this.app = app;
    this.env = environment;
    this.loadConfig();
    this.loadApi();
    this.loadSwagger();
    this.loadErrorHandler();
  }

  loadConfig() {
    this.env.config();
    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors('*'));
    this.app.use(methodOverride('X-HTTP-Method-Override'));
    this.app.use(methodOverride(req => {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            const method = req.body._method;
            delete req.body._method;
            return method;
        }
        return undefined;
    }));
  }

  loadSwagger() {
    if (process.env.NODE_ENV !== 'production') {
      this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig()));
    }
  }

  loadApi() {
    this.app.use('/', initRoutes);
  }

  loadErrorHandler() {
    this.app.use(errorHandler);
    this.app.use('*', (req, res) => res.status(NOT_FOUND).json({
      status: NOT_FOUND,
      message: `Can not GET ${req.originalUrl}`,
  }));
  }

  async connectDB() {
    await mongoConnection();
  }
}
