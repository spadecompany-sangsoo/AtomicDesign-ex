import { IInformation } from '@/@types/board/information';
import { INews } from '@/@types/board/news';
import { IParagraph } from '@/@types/board/paragraph';

type IData = IInformation[] | INews[] | IParagraph[];

type IDataItem = IInformation | INews | IParagraph;

interface IBoardList {
  data: IData;
  renderListItem: (item: IDataItem) => JSX.Element;
}

const BoardList = ({ data, renderListItem }: IBoardList) => {
  return <div>{data.map((item: IDataItem) => renderListItem(item))}</div>;
};

export default BoardList;
