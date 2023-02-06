import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface ICardWhite {
    children?: ReactNode;
}

const CardWhite = ({ children }: ICardWhite) => {
    return <div className={cx('card')}>{children}</div>;
};

export default CardWhite;
