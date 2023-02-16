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

export const Default: ComponentStory<typeof TitleMedium> = (args) => (
  <TitleMedium {...args}></TitleMedium>
);

Default.args = {
  title: 'Medium',
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/a1ayJF0iePE1lKl8hiintO/Untitled?node-id=9%3A2&t=ds7TfPNFJyVu86YY-1',
  },
};
