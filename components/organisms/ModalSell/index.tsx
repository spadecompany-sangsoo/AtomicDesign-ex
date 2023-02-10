import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactElement } from 'react';
import ModalSellTxt from '@/components/atoms/ModalSellTxt';
import ModalSellBtn from '@/components/molecules/ModalSellBtn';

const cx = classNames.bind(styles);

interface IModalSell {
  children: ReactElement | ReactElement[];
}

const ModalSell = ({ children }: IModalSell) => {
  return <div className={cx('modal_area')}>{children}</div>;
};

export default ModalSell;

ModalSell.ModalSellTxt = ModalSellTxt;
ModalSell.ModalSellBtn = ModalSellBtn;
