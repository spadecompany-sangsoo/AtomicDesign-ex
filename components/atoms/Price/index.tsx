import { ReactNode } from 'react';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IPrice {
    price?: string;
    className?: string;
}

const Price = ({ price, className }: IPrice) => {
    return <p className={cx('price', className)}>${price}</p>;
};

export default Price;
