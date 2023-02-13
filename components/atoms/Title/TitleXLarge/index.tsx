import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITitleXLarge {
  title: string;
}

const TitleXLarge = ({ title }: ITitleXLarge) => {
  return <h2 className={cx('title')}>{title}</h2>;
};

export default TitleXLarge;
