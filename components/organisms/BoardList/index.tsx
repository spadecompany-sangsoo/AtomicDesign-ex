import { IInformation } from '@/@types/board/information';

interface IBoardList {
  data: IInformation[];
  renderListItem: (item: IInformation) => JSX.Element;
}

const BoardList = ({ data, renderListItem }: IBoardList) => {
  return <div>{data.map((item: IInformation) => renderListItem(item))}</div>;
};

export default BoardList;
