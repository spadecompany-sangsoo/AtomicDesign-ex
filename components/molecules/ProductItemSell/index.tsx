import styles from './index.module.css';
import classNames from 'classnames/bind';
import { IProduct } from '@/@types/product/product';
import ProductContent from '@/components/molecules/ProductContent';
import headphones from '@/public/img/img_headphones.png';
import icPlus from '@/public/icon/ic_plus.svg';

const cx = classNames.bind(styles);

interface IProductItemSell {
  item: IProduct;
}

const ProductItemSell = ({ item }: IProductItemSell) => {
  const icClick = () => {
    alert('icClick');
  };

  const btnOnClick = () => {
    alert('btnOnClick');
  };

  return (
    <div className={cx('item')}>
      <ProductContent>
        <ProductContent.LargeImage imgSrc={headphones} imgAlt={item.name} />
        <ProductContent.ProductItemTitle title={item.name} />
        <ProductContent.ProductItemDesc desc={item.desc} />
        <ProductContent.ProductPrice price={item.price} className={cx('price_sell')} />
        <ProductContent.ProductButton>
          <ProductContent.ProductButton.IconButton
            icSize="medium"
            icState="default"
            icDsiabled={false}
            icOnClick={icClick}
            icSrc={icPlus}
            icAlt="plus"
          />
          <ProductContent.ProductButton.Button
            btnSize="medium"
            btnState="default"
            btnDsiabled={false}
            btnOnClick={btnOnClick}
            className="fr_1"
          >
            Sell
          </ProductContent.ProductButton.Button>
        </ProductContent.ProductButton>
      </ProductContent>
    </div>
  );
};

export default ProductItemSell;
