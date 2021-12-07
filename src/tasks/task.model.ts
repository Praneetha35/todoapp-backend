import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  days: { type: Number, required: true },
});

export interface Task extends mongoose.Document {
  //eliminates the neccesity of assigning the value to a variable and eliminates boilerplate code
  
    taskName: string,
    days: number,
  
}
