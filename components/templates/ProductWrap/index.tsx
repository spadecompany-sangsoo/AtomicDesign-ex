import styles from './index.module.css';
import classNames from 'classnames/bind';
import ProductItem from "@/components/organisms/ProductItem";

const cx = classNames.bind(styles);

interface IProductWrap {
    direction: string;
}

const ProductWrap = ({ direction }: IProductWrap) => {
    return <div className={cx('wrap', direction)}>
        <ProductItem />
    </div>;
};

export default ProductWrap;
