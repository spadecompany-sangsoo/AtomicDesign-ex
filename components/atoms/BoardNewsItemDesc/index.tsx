import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardNewsItemDesc {
  desc: string;
}

const BoardNewsItemDesc = ({ desc }: IBoardNewsItemDesc) => {
  return <p className={cx('desc')}>{desc}</p>;
};

export default BoardNewsItemDesc;
