import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardInfoItemTitle {
  title: string;
}

const BoardInfoItemTitle = ({ title }: IBoardInfoItemTitle) => {
  return <h6 className={cx('title')}>{title}</h6>;
};

export default BoardInfoItemTitle;
