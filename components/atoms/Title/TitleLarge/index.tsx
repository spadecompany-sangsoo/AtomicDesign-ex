import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITitleLarge {
  title: string;
}

const TitleLarge = ({ title }: ITitleLarge) => {
  return <h6 className={cx('title')}>{title}</h6>;
};

export default TitleLarge;
