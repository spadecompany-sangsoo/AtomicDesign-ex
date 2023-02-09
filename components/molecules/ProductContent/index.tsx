import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactElement } from 'react';
import ProductItemTitle from '@/components/atoms/ProductItemTitle';
import ProductItemDesc from '@/components/atoms/ProductItemDesc';
import LargeImage from '@/components/atoms/LargeImage';
import ProductButton from '@/components/molecules/ProductButton';
import Price from '@/components/atoms/Price';

const cx = classNames.bind(styles);

interface IProductContent {
  children: ReactElement[];
}

const ProductContent = ({ children }: IProductContent) => {
  return <div>{children}</div>;
};

export default ProductContent;

ProductContent.LargeImage = LargeImage;
ProductContent.ProductItemTitle = ProductItemTitle;
ProductContent.ProductItemDesc = ProductItemDesc;
ProductContent.ProductPrice = Price;
ProductContent.ProductButton = ProductButton;
