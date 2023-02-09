import { ReactElement } from 'react';
import BoardTitle from '@/components/atoms/BoardTitle';
import BoardLengthTxt from '@/components/atoms/BoardLengthTxt';
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

BoardHead.BoardTitle = BoardTitle;
BoardHead.BoardLengthTxt = BoardLengthTxt;
