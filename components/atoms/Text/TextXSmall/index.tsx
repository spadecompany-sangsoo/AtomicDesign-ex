import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITextXSmall {
  text: string;
  className?: string;
}

const TextXSmall = ({ text, className }: ITextXSmall) => {
  return <p className={cx('TextXSmall', className)}>{text}</p>;
};

export default TextXSmall;
