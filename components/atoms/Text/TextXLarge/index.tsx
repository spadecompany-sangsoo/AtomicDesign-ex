import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITextXLarge {
  text: string | number;
}

const TextXLarge = ({ text }: ITextXLarge) => {
  return <p className={cx('TextXLarge')}>{text}</p>;
};

export default TextXLarge;
