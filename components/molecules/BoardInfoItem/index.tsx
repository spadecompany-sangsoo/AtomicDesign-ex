import styles from './index.module.css';
import classNames from 'classnames/bind';
import BoardInfoItemTitle from '@/components/atoms/BoardInfoItemTitle';
import BoardInfoItemDesc from '@/components/atoms/BoardInfoItemDesc';
import { IInformation } from '@/@types/board/information';

const cx = classNames.bind(styles);

interface IBoardInfoItem {
  item: IInformation;
}

const BoardInfoItem = ({ item }: IBoardInfoItem) => {
  return (
    <div className={cx('item_wrap')}>
      <BoardInfoItemTitle title={item.title} />
      <BoardInfoItemDesc desc={item.desc} />
    </div>
  );
};

export default BoardInfoItem;
