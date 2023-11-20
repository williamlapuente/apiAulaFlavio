import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    category: string

    @ManyToOne(() => Task, task => task.categories)
    @JoinColumn()
    task: Task
}


