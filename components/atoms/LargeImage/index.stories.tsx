import LargeImage from './index';
import { ComponentStory } from '@storybook/react';
import headphones from '../../../public/img/img_headphones.png';

export default {
  title: 'ATOMS/LargeImage',
  component: LargeImage,
  argTypes: {
    imgSrc: {
      description: 'img 경로',
    },
    imgAlt: {
      description: 'img alt 내용',
    },
  },
};

export const Default: ComponentStory<typeof LargeImage> = (agrs) => (
  <LargeImage {...agrs}></LargeImage>
);

Default.args = {
  imgSrc: headphones,
  imgAlt: 'headphones',
};
