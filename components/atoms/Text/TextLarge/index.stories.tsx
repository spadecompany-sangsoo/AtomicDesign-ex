import TextLarge from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Text/TextLarge',
  component: TextLarge,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
  },
};

export const Default: ComponentStory<typeof TextLarge> = (agrs) => (
  <TextLarge {...agrs}></TextLarge>
);

Default.args = {
  text: 'Large',
};
