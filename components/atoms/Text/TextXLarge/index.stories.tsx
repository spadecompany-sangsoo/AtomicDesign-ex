import TextXLarge from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Text/TextXLarge',
  component: TextXLarge,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
  },
};

export const Default: ComponentStory<typeof TextXLarge> = (agrs) => (
  <TextXLarge {...agrs}></TextXLarge>
);

Default.args = {
  text: 'XLarge',
};
