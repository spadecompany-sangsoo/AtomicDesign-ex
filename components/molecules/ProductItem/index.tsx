import styles from './index.module.css';
import classNames from 'classnames/bind';
import { IProduct } from '@/@types/product/product';
import ProductContent from '@/components/molecules/ProductContent';
import headphones from '@/public/img/img_headphones.png';

const cx = classNames.bind(styles);

interface IProductItem {
  item: IProduct;
  type: 'white' | 'transparent';
}

const ProductItem = ({ item, type }: IProductItem) => {
  return (
    <div className={cx('item', type)}>
      <ProductContent>
        <ProductContent.LargeImage imgSrc={headphones} imgAlt={item.name} />
        <ProductContent.ProductItemTitle title={item.name} className={cx('title')} />
        <ProductContent.ProductItemDesc desc={item.desc} />
      </ProductContent>
    </div>
  );
};

export default ProductItem;
