import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

import { TaskService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}
  //incoming post requests

  @Post()
  async addtask(
    @Body('taskName') taskName: string,
    @Body('days') days: number,
  ) {
    //store the task
    const generatedId = await this.taskService.insertTask(taskName, days);
    return { id: generatedId._id };
  }

  @Get()
  async getAllTasks() {
    return await this.taskService.getTasks();
  }

  @Get(':id')
  async getTask(@Param('id') taskId: string) {
    return await this.taskService.getSingleTask(taskId);
  }

  @Put(':id ')
  async updateTask(
    @Param('id') taskId: string,
    @Body('taskName') taskName: string,
    @Body('days') days: number,
  ) {
    return await this.taskService.updateTask(taskId, taskName, days);
  }

  @Delete(':id')
  async removeProduct(@Param('id') taskId: string) {
    return await this.taskService.deleteTask(taskId);
  }
}



//decorator
//Returns a function and can take a target, name and property descriptors as arguments

//req ,res object --> extract data from res.body
//So we use body decorator
// field in the body argument will be extracted and given to taksName: string for e.g.
//Body decorator will catch the request and then do the above
