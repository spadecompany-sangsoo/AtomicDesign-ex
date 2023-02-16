import TitleXXLarge from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Title/TitleXXLarge',
  component: TitleXXLarge,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
  },
};

export const Default: ComponentStory<typeof TitleXXLarge> = (args) => (
  <TitleXXLarge {...args}></TitleXXLarge>
);
Default.args = {
  title: 'XXLarge',
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/a1ayJF0iePE1lKl8hiintO/Untitled?node-id=9%3A2&t=ds7TfPNFJyVu86YY-1',
  },
};
