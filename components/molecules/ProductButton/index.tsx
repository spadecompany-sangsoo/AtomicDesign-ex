import IconButton from '@/components/atoms/IconButton';
import Button from '@/components/atoms/Button';
import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactElement } from 'react';

const cx = classNames.bind(styles);

interface IProductButton {
  children: ReactElement[];
}

const ProductButton = ({ children }: IProductButton) => {
  return <div className={cx('wrap')}>{children}</div>;
};

export default ProductButton;

ProductButton.IconButton = IconButton;
ProductButton.Button = Button;
