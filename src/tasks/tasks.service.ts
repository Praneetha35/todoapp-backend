import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.model';
@Injectable()
export class TaskService {
  constructor(
    //<Task> is a generic class which holds all the  necessary fields and functions to run
    @InjectModel('Task') private readonly TaskModel: Model<Task>,
  ) {}

  async insertTask(taskName: string, days: number) {
    const newTask = await this.TaskModel.create({ taskName, days });

    return newTask;
  }

  async getTasks() {
    //point to the original code
    //spread operator helps to pull out all the elements and add them to this new array
    const allTasks = await this.TaskModel.find({});
    return allTasks;
  }

  async getSingleTask(taskId: string) {
    // const task: { task: Task; taskIndex: number } = this.findTask(taskId);
    const task = await this.TaskModel.findOne({ _id: taskId }).lean();
    // this.TaskModel.find({ task: Task taskIndex: number })
    return task;
  }

  async updateTask(
    taskId: string,
    taskName: string,
    days: number,
  ): Promise<{ message: string }> {
    const updatedTask = { taskName, days };
    const task = await this.TaskModel.findOneAndUpdate(
      { id: taskId },
      updatedTask,
    );
    return { message: 'updated successfully' };
  }

  async deleteTask(taskId: string): Promise<{ message: string }> {
    //one element is removed
    await this.TaskModel.deleteOne({ _id: taskId });
    return { message: 'deleted successfully' };
  }
}
