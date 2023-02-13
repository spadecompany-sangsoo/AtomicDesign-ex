import TitleSmall from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Title/TitleSmall',
  component: TitleSmall,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
  },
};

export const Default: ComponentStory<typeof TitleSmall> = (agrs) => (
  <TitleSmall {...agrs}></TitleSmall>
);

Default.args = {
  title: 'Small',
};
