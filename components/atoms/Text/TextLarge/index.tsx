import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITextLarge {
  text: string | number;
}

const TextLarge = ({ text }: ITextLarge) => {
  return <p className={cx('TextLarge')}>{text}</p>;
};

export default TextLarge;
