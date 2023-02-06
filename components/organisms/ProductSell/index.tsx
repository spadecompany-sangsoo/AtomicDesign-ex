import styles from './index.module.css';
import classNames from 'classnames/bind';
import CardSell from '@/components/atoms/CardSell';
import Price from '@/components/atoms/Price';
import ProductDesc from '@/components/molecules/ProductDesc';
import ProductButton from '@/components/molecules/ProductButton';
import LargeImage from '@/components/atoms/LargeImage';
import headphones from '@/public/img/img_headphones.png';
import icPlus from '@/public/icon/ic_plus.svg';

const cx = classNames.bind(styles);

const ProductSell = () => {
    const icClick = () => {
        alert('icClick');
    };

    const btnOnClick = () => {
        alert('btnOnClick');
    };

    return (
        <CardSell>
            <LargeImage imgSrc={headphones} imgAlt="headphones" />
            <ProductDesc
                title="iPhone X"
                desc="With Apple Trade In, you can get credit towards a new iPhone when you trade in your eligible smartphone.4 It’s good for you and the planet."
            />
            <Price price="8302.00" className={cx('price_sell')} />
            <ProductButton
                icSize="medium"
                icState="default"
                icDsiabled={false}
                icOnClick={icClick}
                icSrc={icPlus}
                icAlt="plus 아이콘"
                btnTxt="버튼"
                btnSize="medium"
                btnState="default"
                btnDsiabled={false}
                btnOnClick={btnOnClick}
            />
        </CardSell>
    );
};

export default ProductSell;
