import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface IProductWrap {
    direction: string;
    children: ReactNode;
}

const ProductWrap = ({ direction, children }: IProductWrap) => {
    return <div className={cx('wrap', direction)}>{children}</div>;
};

export default ProductWrap;
