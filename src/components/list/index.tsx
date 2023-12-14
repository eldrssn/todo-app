import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchTasks } from '@/store/tasks/actions';
import { selectState } from '@/store/selectors';

import { NewTask, Task } from '../task';
import styles from './list.module.scss';

export const List = () => {
  const dispatch = useAppDispatch();
  const { status, tasks } = useAppSelector(selectState);

  const [isNewTask, setIsNewTask] = useState(false);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Todo List</h1>
        <button
          className={styles.new_task}
          onClick={() => setIsNewTask(true)}
          type="button"
        >
          + add new task
        </button>
      </div>
      {isNewTask ? <NewTask setIsNewTask={setIsNewTask} /> : <></>}

      {status === 'succeeded' && tasks.length === 0 ? (
        <p className={styles.info}>there are no tasks at the moment</p>
      ) : (
        <></>
      )}

      {status === 'loading' ? <p className={styles.info}>loading...</p> : <></>}

      <ul className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};
