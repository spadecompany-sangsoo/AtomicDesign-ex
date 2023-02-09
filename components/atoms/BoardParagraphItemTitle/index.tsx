import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardParagraphItemTitle {
  title: string;
}

const BoardParagraphItemTitle = ({ title }: IBoardParagraphItemTitle) => {
  return <h6 className={cx('title')}>{title}</h6>;
};

export default BoardParagraphItemTitle;
