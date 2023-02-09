import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardNewsItemTitle {
  title: string;
}

const BoardNewsItemTitle = ({ title }: IBoardNewsItemTitle) => {
  return <h6 className={cx('title')}>{title}</h6>;
};

export default BoardNewsItemTitle;
