import TitleMedium from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Title/TitleMedium',
  component: TitleMedium,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
  },
};

export const Default: ComponentStory<typeof TitleMedium> = (agrs) => (
  <TitleMedium {...agrs}></TitleMedium>
);

Default.args = {
  title: 'Medium',
};
