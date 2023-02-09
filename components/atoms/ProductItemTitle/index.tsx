import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProductItemTitle {
  title?: string;
  className?: string;
}

const ProductItemTitle = ({ title, className }: IProductItemTitle) => {
  return <h6 className={cx('title', className)}>{title}</h6>;
};

export default ProductItemTitle;
