import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITask } from '@/models';
import { BASE_URL } from './constants';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: {
    Accept: 'application/json',
  },
});

export const fetchTasks = createAsyncThunk<
  ITask[],
  void,
  { rejectValue: string }
>('tasks/fetchTasks', async (_, { rejectWithValue }) => {
  try {
    const response = await api('/');
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
    const response = await api.post<ITask>('/', { title });
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
    await api.put(`/${id}`, {
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
    await api.delete(`/${id}`);
    return id;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    throw error;
  }
});
