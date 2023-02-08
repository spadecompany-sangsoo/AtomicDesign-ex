import BoardInfoItemTitle from '@/components/atoms/BoardInfoItemTitle';
import BoardInfoItemDesc from '@/components/atoms/BoardInfoItemDesc';
import { IInformation } from '@/@types/board/information';

interface IBoardInfoItem {
  item: IInformation;
}

const BoardInfoItem = ({ item }: IBoardInfoItem) => {
  return (
    <div>
      <BoardInfoItemTitle title={item.title} />
      <BoardInfoItemDesc desc={item.desc} />
    </div>
  );
};

export default BoardInfoItem;
