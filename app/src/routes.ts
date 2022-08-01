import { Router } from 'express';

import { TasksController } from './controllers/TasksController';

const routes = Router();

const tasksController = new TasksController();

routes.get('/tasks/:user', tasksController.findTaskByUsername);

routes.post('/tasks', tasksController.createTask);

export { routes };