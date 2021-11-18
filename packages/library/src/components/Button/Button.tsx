import React, { FC } from 'react';

import './Button.css';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps>  = ({ type, text, onClick }) => {
    return (
        <button type="button" className={`Button Button-${type}`} onClick={onClick}>
            {text} Federico Viotti
        </button>
    )
};

export default Button;
