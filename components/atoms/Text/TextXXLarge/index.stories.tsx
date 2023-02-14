import TextXXLarge from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Text/TextXXLarge',
  component: TextXXLarge,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
    className: {
      options: ['price_sell'],
      control: { type: 'check' },
      description: 'price_sell -> product - sell 페이지에서 price 역할',
    },
  },
};

export const Defalut: ComponentStory<typeof TextXXLarge> = (args) => (
  <TextXXLarge {...args}></TextXXLarge>
);

Defalut.args = {
  text: 'XXLarge',
  className: '',
};
