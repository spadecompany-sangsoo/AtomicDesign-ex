import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITitleSmall {
  title: string;
  className?: string;
}

const TitleSmall = ({ title, className }: ITitleSmall) => {
  return <h6 className={cx('title', className)}>{title}</h6>;
};

export default TitleSmall;
