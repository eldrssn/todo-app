import { FC } from 'react';

import styles from './checkbox.module.scss';

interface CheckboxProps {
  checked: boolean;
  onChange?: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => (
  <label className={styles.checkbox_container}>
    <input checked={checked} onChange={onChange} type="checkbox" />
    <span className={styles.checkmark} data-testid="checkmark"></span>
  </label>
);
