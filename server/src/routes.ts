import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';
import { up } from './database/migrations/00_create_points';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items',itemsController.index);

routes.post('/points',upload.single('image'), pointsController.create);

routes.get('/points', pointsController.index);

routes.get('/points/:id', pointsController.show);

//INDEX se for uma listagem
//SHOW se for apenas um índice
//CREATE, UPDATE, DELETE

export default routes;