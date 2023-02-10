import styles from './index.module.css';
import classNames from 'classnames/bind';
import { IProduct } from '@/@types/product/product';
import ProductContent from '@/components/molecules/ProductContent';
import headphones from '@/public/img/img_headphones.png';
import LargeImage from '@/components/atoms/LargeImage';
import ProductItemTitle from '@/components/atoms/ProductItemTitle';
import ProductItemDesc from '@/components/atoms/ProductItemDesc';
import Price from '@/components/atoms/Price';
import ProductButton from '@/components/molecules/ProductButton';
import { ReactElement } from 'react';

const cx = classNames.bind(styles);

interface IProductItem {
  type?: 'white' | 'transparent';
  children?: ReactElement | ReactElement[];
}

const ProductItem = ({ type = 'white', children }: IProductItem) => {
  return <div className={cx('item', type)}>{children}</div>;
};

export default ProductItem;

ProductItem.ProductLargeImage = LargeImage;
ProductItem.ProductItemTitle = ProductItemTitle;
ProductItem.ProductItemDesc = ProductItemDesc;
ProductItem.ProductPrice = Price;
ProductItem.ProductButton = ProductButton;
