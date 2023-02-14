import IconButton from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/IconButton',
  component: IconButton,
  argTypes: {
    icSize: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
      description: '버튼 크기 조절',
    },
    icState: {
      control: { type: 'radio' },
      options: ['default', 'destructive'],
      description: '버튼 상태',
    },
    icDisabled: {
      control: { type: 'boolean' },
      description: '버튼 dsiabled 처리 유무',
    },
    icOnClick: { action: 'clicked', description: '클릭 핸들러' },
  },
};

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args}></IconButton>;

export const Small = Template.bind({});
Small.args = {
  icSize: 'small',
  icState: 'default',
  icDisabled: false,
};

export const Medium = Template.bind({});
Medium.args = {
  icSize: 'medium',
  icState: 'default',
  icDisabled: false,
};

export const Destructive = Template.bind({});
Destructive.args = {
  icSize: 'small',
  icState: 'destructive',
  icDisabled: false,
};
