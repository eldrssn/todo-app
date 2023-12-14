import { FC } from 'react';
import { IconProps } from '@/types';
import styles from './apply-icon.module.scss';

export const ApplyIcon: FC<IconProps> = ({
  className,
  onClick,
  type = 'button',
}) => (
  <button type={type} onClick={onClick} data-testId="apply-icon">
    <svg
      className={`${styles.svg} ${className}`}
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="circleOkIconTitle"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color="#000000"
      height="24px"
      width="24px"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <title id="circleOkIconTitle">OK</title>{' '}
        <polyline points="7 13 10 16 17 9"></polyline>{' '}
        <circle cx="12" cy="12" r="10"></circle>{' '}
      </g>
    </svg>
  </button>
);
