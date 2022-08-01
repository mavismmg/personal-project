import { getCustomRepository, Repository } from 'typeorm';

import { Task } from '../entities/Task';
import { TasksRepository } from '../repositories/TasksRepository';

export class TasksService {
    private tasksRepository : Repository<Task>;
    constructor() {
        this.tasksRepository = getCustomRepository(TasksRepository);
    };

    async createTask(username: string, weight: number, task: string) {
        const taskExists = await this.tasksRepository.findOne({ task });
        if (taskExists) { 
            return taskExists
        }
        const registerTask = this.tasksRepository.create({ username, weight, task });
        await this.tasksRepository.save(registerTask);
        return registerTask;
    };

    async updateTask() {};

    async deleteTask(task: string) {
        await this.tasksRepository.createQueryBuilder()
            .delete()
            .from(Task)
            .where("task = :task", { task })
            .execute();
    };

    async findTaskByUsername(username: string) {
        const tasks = await this.tasksRepository.findOne({ username });
        return tasks;
    };
};