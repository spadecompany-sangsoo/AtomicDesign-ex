import TitleXLarge from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Title/TitleXLarge',
  component: TitleXLarge,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
  },
};

export const Default: ComponentStory<typeof TitleXLarge> = (args) => (
  <TitleXLarge {...args}></TitleXLarge>
);

Default.args = {
  title: 'XLarge',
};
