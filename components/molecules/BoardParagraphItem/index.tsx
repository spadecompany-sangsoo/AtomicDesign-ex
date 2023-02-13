import styles from './index.module.css';
import classNames from 'classnames/bind';
import TextSmall from '@/components/atoms/Text/TextSmall';
import { IParagraph } from '@/@types/board/paragraph';
import TextXSmall from '@/components/atoms/Text/TextXSmall';
import TitleSmall from '@/components/atoms/Title/TitleSmall';

interface IBoardParagraphItem {
  item: IParagraph;
}

const cx = classNames.bind(styles);

const BoardParagraphItem = ({ item }: IBoardParagraphItem) => {
  return (
    <div className={cx('item_wrap')}>
      <TitleSmall title={item.title} className={cx('title')} />
      <TextSmall text={item.desc} className={cx('board_paragraph_desc')} />
      <TextXSmall text={item.writer} className={cx('write')} />
    </div>
  );
};

export default BoardParagraphItem;
