import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface IButton {
    children?: ReactNode;
    btnSize: string;
    btnState: string;
    btnDsiabled: boolean;
    btnOnClick: () => void;
    className?: string;
}

const Button = ({
    children,
    btnSize,
    btnState,
    btnDsiabled,
    btnOnClick,
    className,
}: IButton) => {
    return (
        <button
            className={cx('btn', btnSize, btnState, className)}
            disabled={btnDsiabled}
            onClick={btnOnClick}
        >
            {children}
        </button>
    );
};

export default Button;
