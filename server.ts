import express from 'express';
import fs from 'fs';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from '@/models';

const PATH_TO_DATA = 'data/data.json';

const app = express();
app.use(express.json());
app.use(cors());

const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(PATH_TO_DATA, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error reading data file:', error.message);
    } else {
      console.error('Non-error occurred:', error);
    }
    return [];
  }
};

app.get('/api/tasks', (_, res) => {
  const tasks = readDataFromFile();
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  try {
    const { title } = req.body;
    const tasks = readDataFromFile();
    const newTask = { id: uuidv4(), title, completed: false };
    tasks.unshift(newTask);
    fs.writeFileSync(PATH_TO_DATA, JSON.stringify(tasks, null, 2), 'utf-8');
    res.json(newTask);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error reading or writing data file:', error.message);
    } else {
      console.error('Non-error occurred:', error);
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/tasks/:id', (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, completed } = req.body;
    const tasks = readDataFromFile();
    const taskIndex = tasks.findIndex((task: ITask) => task.id === taskId);

    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], title, completed };
      fs.writeFileSync(PATH_TO_DATA, JSON.stringify(tasks, null, 2), 'utf-8');
      res.json(tasks[taskIndex]);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error reading or writing data file:', error.message);
    } else {
      console.error('Non-error occurred:', error);
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/tasks/:id', (req, res) => {
  try {
    const taskId = req.params.id;
    const tasks = readDataFromFile();
    const taskIndex = tasks.findIndex((task: ITask) => task.id === taskId);

    if (taskIndex !== -1) {
      const deletedTask = tasks.splice(taskIndex, 1)[0];
      fs.writeFileSync(PATH_TO_DATA, JSON.stringify(tasks, null, 2), 'utf-8');
      res.json(deletedTask);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error reading or writing data file:', error.message);
    } else {
      console.error('Non-error occurred:', error);
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
