import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITextSmall {
  text: string;
  className?: string;
}

const TextSmall = ({ text, className }: ITextSmall) => {
  return <p className={cx('TextSmall', className)}>{text}</p>;
};

export default TextSmall;
