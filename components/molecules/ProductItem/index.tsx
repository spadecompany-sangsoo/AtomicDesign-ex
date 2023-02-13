import styles from './index.module.css';
import classNames from 'classnames/bind';
import LargeImage from '@/components/atoms/LargeImage';
import TitleMedium from '@/components/atoms/Title/TitleMedium';
import TextXXLarge from '@/components/atoms/Text/TextXXLarge';
import ProductButton from '@/components/molecules/ProductButton';
import { ReactElement } from 'react';
import TextMedium from '@/components/atoms/Text/TextMedium';

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
ProductItem.TitleMedium = TitleMedium;
ProductItem.TextMedium = TextMedium;
ProductItem.TextXXLarge = TextXXLarge;
ProductItem.ProductButton = ProductButton;
