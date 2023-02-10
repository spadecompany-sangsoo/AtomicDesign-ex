import styles from './index.module.css';
import classNames from 'classnames/bind';
import React, { ReactNode } from 'react';

const cx = classNames.bind(styles);

type ISize = 'small' | 'medium' | 'fr_1';
type IState = 'default' | 'destructive';

interface IButton {
  text: string;
  btnSize: ISize;
  btnState: IState;
  btnDsiabled: boolean;
  btnOnClick: () => void;
  className?: string;
}

const Button = ({ text, btnSize, btnState, btnDsiabled, btnOnClick, className }: IButton) => {
  return (
    <button
      className={cx('btn', btnSize, btnState, className)}
      disabled={btnDsiabled}
      onClick={btnOnClick}
    >
      {text}
    </button>
  );
};

export default Button;
