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
  btnDisabled: boolean;
  btnOnClick: () => void;
  className?: string;
}

const Button: React.FC<IButton> = ({
  text,
  btnSize,
  btnState,
  btnDisabled,
  btnOnClick,
  className,
}: IButton) => {
  return (
    <button
      className={cx('btn', btnSize, btnState, className)}
      disabled={btnDisabled}
      onClick={btnOnClick}
    >
      {text}
    </button>
  );
};

export default Button;
