import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/entities/task.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'banco.db',
      entities: [Task, Category],

      synchronize: true
    }),
    TasksModule,
    CategoriesModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
