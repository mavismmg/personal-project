import { Entity, EntityRepository, Repository } from 'typeorm';
import { Task } from '../entities/Task';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {};