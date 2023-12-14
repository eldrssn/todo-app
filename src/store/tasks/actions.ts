import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITask } from '@/models';
import { BASE_URL } from './constants';

export const fetchTasks = createAsyncThunk<
  ITask[],
  void,
  { rejectValue: string }
>('tasks/fetchTasks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<ITask[]>(BASE_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    throw error;
  }
});

export const createTask = createAsyncThunk<
  ITask,
  string,
  { rejectValue: string }
>('tasks/createTask', async (title, { rejectWithValue }) => {
  try {
    const response = await axios.post<ITask>(BASE_URL, { title });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    throw error;
  }
});

export const changeTask = createAsyncThunk<
  ITask,
  ITask,
  { rejectValue: string }
>('tasks/changeTask', async ({ id, title, completed }, { rejectWithValue }) => {
  try {
    await axios.put(`${BASE_URL}/${id}`, {
      title,
      completed,
    });
    return { id, title, completed };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    throw error;
  }
});

export const deleteTask = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('tasks/deleteTask', async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    throw error;
  }
});
