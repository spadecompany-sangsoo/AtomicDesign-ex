import { ReactNode } from 'react';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IDesc {
    desc?: string;
}

const Desc = ({ desc }: IDesc) => {
    return <p className={cx('desc')}>{desc}</p>;
};

export default Desc;
