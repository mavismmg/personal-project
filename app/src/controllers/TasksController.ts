import { Request, Response } from 'express';
import { CreateDateColumn } from 'typeorm';

import { TasksService } from '../services/TasksService';
import { TasksRepository } from '../repositories/TasksRepository';

export class TasksController {
    async create(request: Request, response: Response) : Promise<Response> {
        const { user, task } = request.body;
        const tasksService = new TasksService();
        const task_ = await tasksService.create(user, task);
        return response.json(task_);
    };

    // async findTaskByUsername(request: Request, response: Response) {
    //     const { user } = request.params;
    //     const tasksService = new TasksService();
    //     const task_ = await tasksService.findTaskByUsername(user);
    //     return response.json(task_);
    // };
};