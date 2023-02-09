import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardTitle {
  text: string;
}

const BoardTitle = ({ text }: IBoardTitle) => {
  return <h2 className={cx('title')}>{text}</h2>;
};

export default BoardTitle;
