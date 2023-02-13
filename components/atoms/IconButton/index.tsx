import styles from './index.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';
import icPlus from '/public/icon/ic_plus.svg';
import icPlusDestructive from '/public/icon/ic_plus_destructive.svg';

const cx = classNames.bind(styles);

type ISize = 'small' | 'medium';
type TState = 'default' | 'destructive';

interface IIconButton {
  icSize: ISize;
  icState: TState;
  icDisabled: boolean;
  icOnClick: () => void;
}

const IconButton = ({ icSize, icState, icDisabled, icOnClick }: IIconButton) => {
  return (
    <button className={cx('btn', icSize, icState)} disabled={icDisabled} onClick={icOnClick}>
      <Image src={icState === 'default' ? icPlus : icPlusDestructive} alt="plus 아이콘" />
    </button>
  );
};

export default IconButton;
