import headphones from '@/public/img/img_headphones.png';
import LargeImage from '@/components/atoms/LargeImage';
import styles from './index.module.css';
import classNames from 'classnames/bind';
import ProductDesc from '@/components/molecules/ProductDesc';
import Price from '@/components/atoms/Price';
import ProductButton from '@/components/molecules/ProductButton';
import icPlus from '@/public/icon/ic_plus.svg';
import { Product } from '@/@types/product/product';

const cx = classNames.bind(styles);

interface IProductItem {
  type: 'transparent' | 'white' | 'sell';
  data: Product;
}

const ProductItem = ({ type, data }: IProductItem) => {
  const icClick = () => {
    alert('icClick');
  };

  const btnOnClick = () => {
    alert('btnOnClick');
  };

  return (
    <div className={cx('card', type)}>
      <LargeImage imgSrc={headphones} imgAlt="headphones" />
      <ProductDesc title={data.name} desc={data.desc} />
      {type === 'sell' ? (
        <>
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
        </>
      ) : null}
    </div>
  );
};

export default ProductItem;
