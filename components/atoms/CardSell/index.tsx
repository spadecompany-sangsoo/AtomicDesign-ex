import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface ICardSell {
    children?: ReactNode;
}

const CardSell = ({ children }: ICardSell) => {
    return <div className={cx('card')}>{children}</div>;
};

export default CardSell;
