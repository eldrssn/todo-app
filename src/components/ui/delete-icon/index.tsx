import { FC } from 'react';
import { IconProps } from '@/types';
import styles from './delete-icon.module.scss';

export const DeleteIcon: FC<IconProps> = ({
  className,
  onClick,
  type = 'button',
}) => (
  <button type={type} onClick={onClick} data-testId="delete-icon">
    <svg
      className={`${styles.svg} ${className}`}
      fill="#000000"
      height="22px"
      width="22px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 290 290"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="XMLID_24_">
          {' '}
          <g id="XMLID_29_">
            {' '}
            <path d="M265,60h-30h-15V15c0-8.284-6.716-15-15-15H85c-8.284,0-15,6.716-15,15v45H55H25c-8.284,0-15,6.716-15,15s6.716,15,15,15 h5.215H40h210h9.166H265c8.284,0,15-6.716,15-15S273.284,60,265,60z M190,60h-15h-60h-15V30h90V60z"></path>{' '}
          </g>{' '}
          <g id="XMLID_86_">
            {' '}
            <path d="M40,275c0,8.284,6.716,15,15,15h180c8.284,0,15-6.716,15-15V120H40V275z"></path>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  </button>
);
