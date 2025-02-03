import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { Task } from './models/task.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'todo_db',
      entities: [Task],
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule { }
