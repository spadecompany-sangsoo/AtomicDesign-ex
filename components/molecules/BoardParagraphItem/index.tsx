import styles from './index.module.css';
import classNames from 'classnames/bind';
import BoardParagraphItemTitle from '@/components/atoms/BoardParagraphItemTitle';
import BoardParagraphItemDesc from '@/components/atoms/BoardParagraphItemDesc';
import { IParagraph } from '@/@types/board/paragraph';
import BoardParagraphItemWriter from '@/components/atoms/BoardParagraphItemWrite';

interface IBoardParagraphItem {
  item: IParagraph;
}

const cx = classNames.bind(styles);

const BoardParagraphItem = ({ item }: IBoardParagraphItem) => {
  return (
    <div className={cx('item_wrap')}>
      <BoardParagraphItemTitle title={item.title} />
      <BoardParagraphItemDesc desc={item.desc} className={cx('desc')} />
      <BoardParagraphItemWriter writer={item.writer} />
    </div>
  );
};

export default BoardParagraphItem;
