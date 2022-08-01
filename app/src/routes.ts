import { Router } from 'express';

import { TasksController } from './controllers/TasksController';

const routes = Router();

const tasksController = new TasksController();

// Get routes.
routes.get('/tasks/:username', tasksController.findTaskByUsername);

// Post routes.
routes.post('/tasks', tasksController.createTask);

// Put routes;

// Delete routes.
routes.delete('/tasks/:task', tasksController.deleteTask);

export { routes };