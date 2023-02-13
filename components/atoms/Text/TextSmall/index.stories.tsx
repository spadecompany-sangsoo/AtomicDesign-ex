import TextSmall from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Text/TextSmall',
  component: TextSmall,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
  },
};

export const Default: ComponentStory<typeof TextSmall> = (agrs) => (
  <TextSmall {...agrs}></TextSmall>
);

Default.args = {
  text: 'Small',
};
