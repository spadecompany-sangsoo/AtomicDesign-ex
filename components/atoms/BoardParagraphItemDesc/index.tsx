import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardParagraphItemDesc {
  desc: string;
  className?: string;
}

const BoardParagraphItemDesc = ({ desc, className }: IBoardParagraphItemDesc) => {
  return <p className={cx('desc', className)}>{desc}</p>;
};

export default BoardParagraphItemDesc;
