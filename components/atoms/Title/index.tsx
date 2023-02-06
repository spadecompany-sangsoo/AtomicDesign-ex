import { ReactNode } from 'react';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITitle {
    title?: string;
    className?: string;
}

const Title = ({ title, className }: ITitle) => {
    return <h6 className={cx('title', className)}>{title}</h6>;
};

export default Title;
