import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

const cx = classNames.bind(styles);

interface IIconButton {
    icSize: string;
    icState: string;
    icDsiabled: boolean;
    icOnClick: () => void;
    icSrc: HTMLImageElement | string | StaticImageData;
    icAlt: string;
}

const IconButton = ({
    icSize,
    icState,
    icDsiabled,
    icOnClick,
    icSrc,
    icAlt,
}: IIconButton) => {
    return (
        <button
            className={cx('btn', icSize, icState)}
            disabled={icDsiabled}
            onClick={icOnClick}
        >
            <Image src={icSrc} alt={icAlt} />
        </button>
    );
};

export default IconButton;
