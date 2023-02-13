import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITitleMedium {
  title?: string;
  className?: string;
}

const TitleMedium = ({ title, className }: ITitleMedium) => {
  return <h6 className={cx('title', className)}>{title}</h6>;
};

export default TitleMedium;
