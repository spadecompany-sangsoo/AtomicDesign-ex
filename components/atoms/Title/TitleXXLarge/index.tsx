import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITitleXXLarge {
  title?: string;
  className?: string;
}

const TitleXXLarge = ({ title, className }: ITitleXXLarge) => {
  return <h2 className={cx('title', className)}>{title}</h2>;
};

export default TitleXXLarge;
