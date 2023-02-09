import BoardParagraphItemTitle from '@/components/atoms/BoardParagraphItemTitle';
import BoardParagraphItemDesc from '@/components/atoms/BoardParagraphItemDesc';
import { IParagraph } from '@/@types/board/paragraph';
import BoardParagraphItemWriter from '@/components/atoms/BoardParagraphItemWrite';

interface IBoardParagraphItem {
  item: IParagraph;
}

const BoardParagraphItem = ({ item }: IBoardParagraphItem) => {
  return (
    <div>
      <BoardParagraphItemTitle title={item.title} />
      <BoardParagraphItemDesc desc={item.desc} />
      <BoardParagraphItemWriter writer={item.writer} />
    </div>
  );
};

export default BoardParagraphItem;
