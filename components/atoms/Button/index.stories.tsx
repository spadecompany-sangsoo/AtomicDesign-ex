import Button from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ATOMS/Button',
  component: Button,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '안에 들어갈 텍스트',
    },
    btnSize: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'fr_1'],
      description: '버튼 크기 조절',
    },
    btnState: {
      control: { type: 'radio' },
      options: ['default', 'destructive'],
      description: '버튼 상태',
    },
    btnDisabled: {
      control: { type: 'boolean' },
      description: '버튼 dsiabled 처리 유무',
    },
    className: {
      control: { type: 'text' },
      description: '',
    },
    btnOnClick: { action: 'clicked', description: '클릭 핸들러' },
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>;

export const Small = Template.bind({});
Small.args = {
  text: '버튼',
  className: '',
  btnSize: 'small',
  btnState: 'default',
  btnDisabled: false,
};

export const Medium = Template.bind({});
Medium.args = {
  text: '버튼',
  className: '',
  btnSize: 'medium',
  btnState: 'default',
  btnDisabled: false,
};

export const Fr_1 = Template.bind({});
Fr_1.args = {
  text: '버튼',
  className: '',
  btnSize: 'fr_1',
  btnState: 'default',
  btnDisabled: false,
};

export const Destructive = Template.bind({});
Destructive.args = {
  text: '버튼',
  className: '',
  btnSize: 'small',
  btnState: 'destructive',
  btnDisabled: false,
};
