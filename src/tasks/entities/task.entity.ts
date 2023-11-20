import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    task: string

    @Column({ nullable: true })
    description: string

    @ManyToOne(() => Category, category => category.id)
    @JoinColumn()
    categories: Category[]


}
