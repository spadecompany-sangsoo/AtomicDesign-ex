import styles from './index.module.css';
import classNames from 'classnames/bind';
import BoardNewsItemTitle from '@/components/atoms/BoardNewsItemTitle';
import BoardNewsItemDesc from '@/components/atoms/BoardNewsItemDesc';
import { INews } from '@/@types/board/news';
import BoardNewsItemDate from '@/components/atoms/BoardNewsItemDate';

interface IBoardNewsItem {
  item: INews;
}

const cx = classNames.bind(styles);

const BoardNewsItem = ({ item }: IBoardNewsItem) => {
  return (
    <div className={cx('item_wrap')}>
      <BoardNewsItemDate date={item.date} />
      <div className={cx('item_txt')}>
        <BoardNewsItemTitle title={item.title} />
        <BoardNewsItemDesc desc={item.desc} />
      </div>
    </div>
  );
};

export default BoardNewsItem;
