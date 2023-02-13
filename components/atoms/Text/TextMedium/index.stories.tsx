import TextMedium from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Text/TextMedium',
  component: TextMedium,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
    className: {
      options: ['product_desc'],
      control: { type: 'check' },
      description: 'product_desc -> product 페이지 desc 일 때 적용',
    },
  },
};

export const Defalut: ComponentStory<typeof TextMedium> = (agrs) => (
  <TextMedium {...agrs}></TextMedium>
);

Defalut.args = {
  text: 'Medium',
  className: '',
};
