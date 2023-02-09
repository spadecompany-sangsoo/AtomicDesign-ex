import styles from './index.module.css';
import classNames from 'classnames/bind';
import { IInformation } from '@/@types/board/information';
import { INews } from '@/@types/board/news';
import { IParagraph } from '@/@types/board/paragraph';

type IData = IInformation[] | INews[] | IParagraph[];

type IDataItem = IInformation | INews | IParagraph;

interface IBoardList {
  data: IData;
  className?: string;
  renderListItem: (item: IDataItem) => JSX.Element;
}

const cx = classNames.bind(styles);

const BoardList = ({ data, className, renderListItem }: IBoardList) => {
  return <div className={cx(className)}>{data.map((item: IDataItem) => renderListItem(item))}</div>;
};

export default BoardList;
