import TitleLarge from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Title/TitleLarge',
  component: TitleLarge,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
  },
};

export const Default: ComponentStory<typeof TitleLarge> = (args) => (
  <TitleLarge {...args}></TitleLarge>
);

Default.args = {
  title: 'Large',
};
