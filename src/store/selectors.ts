import { RootState } from '.';

export const selectTasks = (state: RootState) => state.tasks.tasks;

export const selectState = (state: RootState) => state.tasks;
