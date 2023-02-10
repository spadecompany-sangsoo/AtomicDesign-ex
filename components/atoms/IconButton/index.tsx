import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

const cx = classNames.bind(styles);

type ISize = 'small' | 'medium';
type TState = 'default' | 'destructive';

interface IIconButton {
  icSize: ISize;
  icState: TState;
  icDsiabled: boolean;
  icOnClick: () => void;
  icSrc: HTMLImageElement | string | StaticImageData;
  icAlt: string;
}

const IconButton = ({ icSize, icState, icDsiabled, icOnClick, icSrc, icAlt }: IIconButton) => {
  return (
    <button className={cx('btn', icSize, icState)} disabled={icDsiabled} onClick={icOnClick}>
      <Image src={icSrc} alt={icAlt} />
    </button>
  );
};

export default IconButton;
