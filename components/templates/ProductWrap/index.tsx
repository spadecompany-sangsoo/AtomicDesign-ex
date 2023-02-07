import styles from './index.module.css';
import classNames from 'classnames/bind';
import ProductItem from '@/components/organisms/ProductItem';
import { Product } from '@/@types/product/product';

const cx = classNames.bind(styles);

interface IProductWrap {
  direction: 'col' | 'row';
  type: 'transparent' | 'white' | 'sell';
  data: Product[];
}

const ProductWrap = ({ direction, type, data }: IProductWrap) => {
  return (
    <div className={cx('wrap', direction)}>
      {data?.map((item) => (
        <ProductItem type={type} key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ProductWrap;
