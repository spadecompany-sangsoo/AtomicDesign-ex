import { ReactElement } from 'react';
import styles from './index.module.css';
import classNames from 'classnames/bind';
import ProductTitle from '@/components/atoms/ProductTitle';

const cx = classNames.bind(styles);

interface IProductHead {
  children: ReactElement | ReactElement[];
  className?: string;
}

const ProductHead = ({ children, className }: IProductHead) => {
  return <div className={cx('product_head', className)}>{children}</div>;
};

export default ProductHead;

ProductHead.ProductTitle = ProductTitle;
