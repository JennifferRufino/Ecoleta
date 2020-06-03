import express from 'express';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items',itemsController.index);

routes.post('/points', pointsController.create);

routes.get('/points', pointsController.index);

routes.get('/points/:id', pointsController.show);

//INDEX se for uma listagem
//SHOW se for apenas um índice
//CREATE, UPDATE, DELETE

export default routes;