import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactElement } from 'react';

const cx = classNames.bind(styles);

interface IProductContent {
  children: ReactElement[];
}

const ProductContent = ({ children }: IProductContent) => {
  return <div>{children}</div>;
};

export default ProductContent;
