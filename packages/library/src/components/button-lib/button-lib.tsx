import React, { FC } from 'react';

import './button-lib.css';
import { ButtonLibProps } from './button-lib.types';

const ButtonLib: FC<ButtonLibProps> = ({
  type,
  text,
  onClick,
  backgroundColor,
}) => {
  return (
    <button
      type="button"
      className={`ButtonLib ButtonLib-${type}`}
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {text}
    </button>
  );
};

export default ButtonLib;
