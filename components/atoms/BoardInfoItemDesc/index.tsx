import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardInfoItemDesc {
  desc: string;
}

const BoardInfoItemDesc = ({ desc }: IBoardInfoItemDesc) => {
  return <p className={cx('desc')}>{desc}</p>;
};

export default BoardInfoItemDesc;
