import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardParagraphItemWriter {
  writer: string;
  className?: string;
}

const BoardParagraphItemWriter = ({ writer, className }: IBoardParagraphItemWriter) => {
  return <p className={cx('writer', className)}>{writer}</p>;
};

export default BoardParagraphItemWriter;
