import { Entity, PrimaryColumn, Column, CreateDateColumn, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('tasks')
export class Task {
    @PrimaryColumn()
    id: string;

    @Column()
    user: string

    @Column()
    task: string

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) { this.id = uuid(); };
    };
};