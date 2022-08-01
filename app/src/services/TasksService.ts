import { getCustomRepository, Repository } from 'typeorm';

import { Task } from '../entities/Task';
import { TasksRepository } from '../repositories/TasksRepository';

export class TasksService {
    private tasksRepository : Repository<Task>;
    constructor() {
        this.tasksRepository = getCustomRepository(TasksRepository);
    };

    async createTask(user: string, task: string) {
        const taskExists = await this.tasksRepository.findOne({ task });
        if (taskExists) { return taskExists };

        const task_ = this.tasksRepository.create({ user, task });

        await this.tasksRepository.save(task_);
    
        return task_;
    };

    async findTaskByUsername(user: string) {
        const tasks = await this.tasksRepository.findOne({ user });
        return tasks;
    };
};