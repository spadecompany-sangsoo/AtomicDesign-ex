import { ReactElement } from 'react';
import BoardTitle from '@/components/atoms/BoardTitle';
import BoardLengthTxt from '@/components/atoms/BoardLengthTxt';

interface IBoardHead {
  children: ReactElement[];
}

const BoardHead = ({ children }: IBoardHead) => {
  return <div>{children}</div>;
};

export default BoardHead;

BoardHead.BoardTitle = BoardTitle;
BoardHead.BoardLengthTxt = BoardLengthTxt;
