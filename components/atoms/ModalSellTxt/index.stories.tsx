import ModalSellTxt from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/ModalSellTxt',
  component: ModalSellTxt,
  argTypes: {
    itemName: {
      control: { type: 'text' },
      description: '판매할 물건 이름',
    },
  },
};

export const Default: ComponentStory<typeof ModalSellTxt> = (agrs) => (
  <ModalSellTxt {...agrs}></ModalSellTxt>
);

Default.args = {
  itemName: '물건 이름',
};
