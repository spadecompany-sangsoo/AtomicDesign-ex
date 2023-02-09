import styles from './index.module.css';
import classNames from 'classnames/bind';
import { IProduct } from '@/@types/product/product';

const cx = classNames.bind(styles);

interface IProductList {
  data: IProduct[];
  renderListItem: (item: IProduct) => JSX.Element;
  direction: 'row' | 'col';
}

const ProductList = ({ data, renderListItem, direction }: IProductList) => {
  return (
    <div className={cx('item_wrap', direction)}>
      {data.map((item: IProduct) => renderListItem(item))}
    </div>
  );
};

export default ProductList;
