import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface ICardTransparent {
    children?: ReactNode;
}

const CardTransparent = ({ children }: ICardTransparent) => {
    return <div className={cx('card')}>{children}</div>;
};

export default CardTransparent;
