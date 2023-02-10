import styles from './index.module.css';
import classNames from 'classnames/bind';
import { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import ModalSell from '@/components/organisms/ModalSell';

const cx = classNames.bind(styles);

interface IModalTemplates {
  children: ReactElement | ReactElement[];
  isOpen: boolean;
}

const ModalTemplates = ({ children, isOpen = false }: IModalTemplates) => {
  const portal = typeof window !== 'undefined' && document.getElementById('modal');

  if (!isOpen) {
    document.body.classList.remove('is_scrollFix');
    return null;
  } else {
    document.body.classList.add('is_scrollFix');
  }

  return portal && children
    ? createPortal(<div className={cx('modal_wrap')}>{children}</div>, portal)
    : null;
};

export default ModalTemplates;

ModalTemplates.ModalSell = ModalSell;
