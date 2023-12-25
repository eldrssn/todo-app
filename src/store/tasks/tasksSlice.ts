import { createSlice } from '@reduxjs/toolkit';

import { ITask } from '@/models';
import { initialState } from './constants';
import { changeTask, createTask, deleteTask, fetchTasks } from './actions';

export type TasksState = {
  tasks: ITask[];
  error: string;
  status: string;
};

const taskSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.payload ?? 'An error occurred while fetching todos.';
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks.unshift(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
      })
      .addCase(changeTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        state.tasks[index] = action.payload;
      });
  },
});

export default taskSlice.reducer;
