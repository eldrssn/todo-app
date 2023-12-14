import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { ITask } from '@/models';
import { changeTask, createTask, deleteTask } from '@/store/tasks/actions';
import { useAppDispatch } from '@/store/hooks';

import { Checkbox } from '../ui/checkbox';
import { DeleteIcon } from '../ui/delete-icon';
import { ApplyIcon } from '../ui/apply-icon';
import styles from './task.module.scss';

interface TaskProps {
  task: ITask;
}

export const Task: FC<TaskProps> = ({ task }) => {
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
          <DeleteIcon className={styles.task_delete} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
};

interface NewTaskProps {
  setIsNewTask: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewTask: FC<NewTaskProps> = ({ setIsNewTask }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement | null>(null);

  const [title, setTitle] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleClose = () => {
    setIsNewTask(false);
  };

  useEffect(() => {
    ref.current && ref.current.focus();

    return () => {
      setTitle('');
    };
  }, []);

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    isError && setIsError(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!title) {
      setIsError(true);
      return;
    }

    dispatch(createTask(title));
    handleClose();
  };

  return (
    <div className={clsx(styles.wrapper, { [styles.error]: isError })}>
      <form className={styles.task_header} onSubmit={handleSubmit}>
        <input
          ref={ref}
          type="text"
          value={title}
          onChange={handleChangeTitle}
        />

        <div className={styles.actions}>
          <ApplyIcon className={styles.task_delete} type="submit" />
          <DeleteIcon className={styles.task_delete} onClick={handleClose} />
        </div>
      </form>
    </div>
  );
};
