import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardLengthTxt {
  length: number;
}

const BoardLengthTxt = ({ length }: IBoardLengthTxt) => {
  return <p className={cx('length')}>{length}</p>;
};

export default BoardLengthTxt;
