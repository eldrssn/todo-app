import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { useAppDispatch } from '@/store/hooks';
import { createTask } from '@/store/tasks/actions';

import { ApplyButton } from '../ui/apply-button';
import { DeleteButton } from '../ui/delete-button';
import styles from './new-task.module.scss';

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
          <ApplyButton type="submit" />
          <DeleteButton onClick={handleClose} />
        </div>
      </form>
    </div>
  );
};
