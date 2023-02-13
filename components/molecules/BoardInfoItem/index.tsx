import styles from './index.module.css';
import classNames from 'classnames/bind';
import TitleSmall from '@/components/atoms/Title/TitleSmall';
import { IInformation } from '@/@types/board/information';
import TextSmall from '@/components/atoms/Text/TextSmall';

const cx = classNames.bind(styles);

interface IBoardInfoItem {
  item: IInformation;
}

const BoardInfoItem = ({ item }: IBoardInfoItem) => {
  return (
    <div className={cx('item_wrap')}>
      <TitleSmall title={item.title} />
      <TextSmall text={item.desc} />
    </div>
  );
};

export default BoardInfoItem;
