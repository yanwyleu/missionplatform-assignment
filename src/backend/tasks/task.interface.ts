// src/backend/tasks/task.interface.ts

import { Document } from "mongoose";

export interface Task extends Document {
  title: string;
  description: string;
  status: string;
  taskID: string;
  userID: string;
  createdAt: Date | number;
  updatedAt: Date | number;
}

export interface Tasks extends Array<Task> { }
