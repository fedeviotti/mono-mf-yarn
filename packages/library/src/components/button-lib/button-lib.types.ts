import { MouseEventHandler } from 'react';

export interface ButtonLibProps {
  type: 'primary' | 'secondary' | 'error';
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
}
