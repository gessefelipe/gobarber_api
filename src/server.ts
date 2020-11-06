import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import ensureAuthenticated from './middlewares/ensureAuthenticated';

import './database';

const app = express();

app.use(express.json());

app.use('/files', ensureAuthenticated, express.static(uploadConfig.directory));

app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
