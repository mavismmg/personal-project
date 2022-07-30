import { Router } from 'express';

import TaskController from '../controllers/TaskController';

const routes = Router();

routes.post('/task', TaskController.createTask);

export default routes;