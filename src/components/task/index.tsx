import { FC, memo } from 'react';
import clsx from 'clsx';

import { ITask } from '@/models';
import { changeTask, deleteTask } from '@/store/tasks/actions';
import { useAppDispatch } from '@/store/hooks';

import { Checkbox } from '../ui/checkbox';
import { DeleteButton } from '../ui/delete-button';
import styles from './task.module.scss';

interface TaskProps {
  task: ITask;
}

export const Task: FC<TaskProps> = memo(({ task }) => {
  const dispatch = useAppDispatch();

  const handleToggleCompleted = async () => {
    dispatch(changeTask({ ...task, completed: !task.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li className={styles.wrapper}>
      <div className={styles.task_header}>
        <Checkbox onChange={handleToggleCompleted} checked={task.completed} />
        <p className={clsx({ [styles.isCompleted]: task.completed })}>
          {task.title}
        </p>
        <div className={styles.actions}>
          <DeleteButton onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
});
