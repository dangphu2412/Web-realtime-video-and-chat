import express from 'express';
import env from 'dotenv';
import { App } from './config/bundle';

const app = express();
const bundleEngine = new App(app, env);
bundleEngine
    .connectDB()
    .then(console.log('Connected to mongo'))
    .catch(err => { console.log(err); });

export default app;
