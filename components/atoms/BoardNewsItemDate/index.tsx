import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardNewsItemDate {
  date: string;
}

const BoardNewsItemDate = ({ date }: IBoardNewsItemDate) => {
  return <p className={cx('date')}>{date}</p>;
};

export default BoardNewsItemDate;
