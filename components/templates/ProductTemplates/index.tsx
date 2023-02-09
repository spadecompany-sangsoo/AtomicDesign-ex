import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactElement } from 'react';
import ProductList from '@/components/organisms/ProductList';
import ProductHead from '@/components/molecules/ProductHead';

const cx = classNames.bind(styles);

interface IProductTemplates {
  children: ReactElement | ReactElement[];
}

const ProductTemplates = ({ children }: IProductTemplates) => {
  return <div>{children}</div>;
};

export default ProductTemplates;

ProductTemplates.ProductHead = ProductHead;
ProductTemplates.ProductList = ProductList;
