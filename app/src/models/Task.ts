import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
        id: {type: String},
        task: {type: String, required: true},
        date: {type: Date}
    }
);

const tasks = mongoose.model('tasks', taskSchema);

export default tasks;