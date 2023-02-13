import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ITextXXLarge {
  text?: string;
  className?: string;
}

const TextXXLarge = ({ text, className }: ITextXXLarge) => {
  return (
    <p className={cx('TextXXLarge', className)}>
      {className === 'price_sell' ? '$' : null}
      {text}
    </p>
  );
};

export default TextXXLarge;
