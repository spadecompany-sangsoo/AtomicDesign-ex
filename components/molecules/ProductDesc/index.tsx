import Title from '@/components/atoms/Title';
import Desc from '@/components/atoms/Desc';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProductDesc {
    title: string;
    desc: string;
}

const ProductDesc = ({ title, desc }: IProductDesc) => {
    return (
        <>
            <Title className={cx('title')} title={title} />
            <Desc desc={desc} />
        </>
    );
};

export default ProductDesc;
