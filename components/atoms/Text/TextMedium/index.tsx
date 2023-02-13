import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITextMedium {
  text: string | number;
  className?: string;
}

const TextMedium = ({ text, className }: ITextMedium) => {
  return <p className={cx('TextMedium', className)}>{text}</p>;
};

export default TextMedium;
