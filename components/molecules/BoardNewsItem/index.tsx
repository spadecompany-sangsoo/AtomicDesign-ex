import BoardNewsItemTitle from '@/components/atoms/BoardNewsItemTitle';
import BoardNewsItemDesc from '@/components/atoms/BoardNewsItemDesc';
import { INews } from '@/@types/board/news';
import BoardNewsItemDate from '@/components/atoms/BoardNewsItemDate';

interface IBoardNewsItem {
  item: INews;
}

const BoardNewsItem = ({ item }: IBoardNewsItem) => {
  return (
    <div>
      <BoardNewsItemTitle title={item.title} />
      <BoardNewsItemDesc desc={item.desc} />
      <BoardNewsItemDate date={item.date} />
    </div>
  );
};

export default BoardNewsItem;
