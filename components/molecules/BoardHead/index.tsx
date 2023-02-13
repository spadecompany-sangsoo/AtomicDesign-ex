import { ReactElement } from 'react';
import TitleXLarge from '@/components/atoms/Title/TitleXLarge';
import TextXLarge from '@/components/atoms/Text/TextXLarge';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IBoardHead {
  children: ReactElement[];
  className?: string;
}

const BoardHead = ({ children, className }: IBoardHead) => {
  return <div className={cx('board_head', className)}>{children}</div>;
};

export default BoardHead;

BoardHead.TitleXLarge = TitleXLarge;
BoardHead.TextXLarge = TextXLarge;
