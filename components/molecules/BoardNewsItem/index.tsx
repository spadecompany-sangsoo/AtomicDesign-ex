import styles from './index.module.css';
import classNames from 'classnames/bind';
import TitleLarge from '@/components/atoms/Title/TitleLarge';
import TextMedium from '@/components/atoms/Text/TextMedium';
import { INews } from '@/@types/board/news';
import TextLarge from '@/components/atoms/Text/TextLarge';

interface IBoardNewsItem {
  item: INews;
}

const cx = classNames.bind(styles);

const BoardNewsItem = ({ item }: IBoardNewsItem) => {
  return (
    <div className={cx('item_wrap')}>
      <TextLarge text={item.date} />
      <div className={cx('item_txt')}>
        <TitleLarge title={item.title} />
        <TextMedium text={item.desc} />
      </div>
    </div>
  );
};

export default BoardNewsItem;
