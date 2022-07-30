import { Request, Response } from 'express';

import tasks from '../models/Task';

export default class TaskController {
    async createTask (req: Request, res: Response) : Promise<Response> {
        let task = new tasks(req.body);
        
        task.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - failed to create task.` });
            } else {
                res.status(201).send(task.toJSON());
            }
        });
    };
}