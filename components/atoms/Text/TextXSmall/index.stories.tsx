import TextXSmall from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Text/TextXSmall',
  component: TextXSmall,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
    className: {
      options: ['write'],
      control: { type: 'check' },
      description: 'write -> light-gray 색상 적용',
    },
  },
};

export const Defalut: ComponentStory<typeof TextXSmall> = (args) => (
  <TextXSmall {...args}></TextXSmall>
);

Defalut.args = {
  text: 'XSmall',
  className: '',
};
