import Image, { StaticImageData } from 'next/image';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ILargeImage {
    imgSrc: HTMLImageElement | string | StaticImageData;
    imgAlt: string;
}

const LargeImage = ({ imgSrc, imgAlt }: ILargeImage) => {
    return (
        <figure className={cx('wrap')}>
            <Image src={imgSrc} alt={imgAlt} />
        </figure>
    );
};

export default LargeImage;
