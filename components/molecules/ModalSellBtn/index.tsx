import Button from '@/components/atoms/Button';
import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactElement } from 'react';

const cx = classNames.bind(styles);

interface IModalSellBtn {
  children?: ReactElement | ReactElement[];
}

const ModalSellBtn = ({ children }: IModalSellBtn) => {
  return <div className={cx('wrap')}>{children}</div>;
};

export default ModalSellBtn;

Button.displayName = 'ModalSellBtn.Button';
ModalSellBtn.Button = Button;
