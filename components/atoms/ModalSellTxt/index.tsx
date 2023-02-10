import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IModalSellTxt {
  itemName?: string;
  className?: string;
}

const ModalSellTxt = ({ itemName, className }: IModalSellTxt) => {
  return (
    <p className={cx('txt', className)}>
      <b className={cx('name')}>{itemName}</b>을 정말로 판매하시겠습니까?
    </p>
  );
};

export default ModalSellTxt;
