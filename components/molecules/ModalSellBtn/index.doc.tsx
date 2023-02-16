import Button from '@/components/atoms/Button';
import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactElement } from 'react';

const cx = classNames.bind(styles);

interface IDocModalSellBtn {
  children?: ReactElement | ReactElement[];
}

const DocModalSellBtn = ({ children }: IDocModalSellBtn) => {
  return <div className={cx('wrap')}>{children}</div>;
};

export default DocModalSellBtn;
