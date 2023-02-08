import { ReactElement } from 'react';
import BoardHead from '@/components/molecules/BoardHead';
import BoardList from '@/components/organisms/BoardList';

interface IBoardTemplates {
  children: ReactElement | ReactElement[];
}

const BoardTemplates = ({ children }: IBoardTemplates) => {
  return <div>{children}</div>;
};

export default BoardTemplates;

BoardTemplates.BoardHead = BoardHead;
BoardTemplates.BoardList = BoardList;
