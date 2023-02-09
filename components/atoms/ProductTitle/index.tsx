import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProductTitle {
  title?: string;
  className?: string;
}

const ProductTitle = ({ title, className }: IProductTitle) => {
  return <h2 className={cx('title', className)}>{title}</h2>;
};

export default ProductTitle;
