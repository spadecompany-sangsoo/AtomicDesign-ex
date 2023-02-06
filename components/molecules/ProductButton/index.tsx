import IconButton from '@/components/atoms/IconButton';
import Button from '@/components/atoms/Button';
import { StaticImageData } from 'next/image';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProductButton {
    icSize: string;
    icState: string;
    icDsiabled: boolean;
    icOnClick: () => void;
    icSrc: HTMLImageElement | string | StaticImageData;
    icAlt: string;
    btnTxt: string;
    btnSize: string;
    btnState: string;
    btnDsiabled: boolean;
    btnOnClick: () => void;
}

const ProductButton = ({ ...props }: IProductButton) => {
    const {
        icSize,
        icState,
        icDsiabled,
        icOnClick,
        icSrc,
        icAlt,
        btnTxt,
        btnSize,
        btnState,
        btnDsiabled,
        btnOnClick,
    } = props;

    const icProps = {
        icSize,
        icState,
        icDsiabled,
        icOnClick,
        icSrc,
        icAlt,
    };

    const btnProps = {
        btnTxt,
        btnSize,
        btnState,
        btnDsiabled,
        btnOnClick,
    };

    return (
        <div className={cx('wrap')}>
            <IconButton {...icProps} />
            <Button {...btnProps} className={cx('fr1')}>
                {btnTxt}
            </Button>
        </div>
    );
};

export default ProductButton;
