import { TasksState } from './tasksSlice';

export const initialState: TasksState = {
  tasks: [],
  error: '',
  status: '',
};

export const BASE_URL = 'http://localhost:3000/api/tasks';
