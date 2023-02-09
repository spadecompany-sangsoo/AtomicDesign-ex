import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProductItemDesc {
  desc?: string;
}

const ProductItemDesc = ({ desc }: IProductItemDesc) => {
  return <p className={cx('desc')}>{desc}</p>;
};

export default ProductItemDesc;
