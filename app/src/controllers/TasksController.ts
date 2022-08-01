import { Request, Response } from 'express';
import { CreateDateColumn } from 'typeorm';

import { TasksService } from '../services/TasksService';
import { TasksRepository } from '../repositories/TasksRepository';

export class TasksController {
    async createTask(request: Request, response: Response) : Promise<Response> {
        const { username, weight, task } = request.body;
        const tasksService = new TasksService();
        const registerTask = await tasksService.createTask(username, weight, task);
        return response.json(registerTask);
    };

    async updateTask() {};

    async deleteTask(request: Request, response: Response) {
        const { task } = request.params;
        const { username } = request.body;
        const tasksService = new TasksService();
        const taskDeleted = await tasksService.deleteTask(task);
        return response.json(`Task from user ${username} was deleted.`);
    };

    async findTaskByUsername(request: Request, response: Response) {
        const { username } = request.params;
        const tasksService = new TasksService();
        const findTask = await tasksService.findTaskByUsername(username);
        return response.json(findTask);
    };
};