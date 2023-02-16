import '../styles/globals.css';
import * as NextImage from 'next/image';

NextImage.default.defaultProps = {
  unoptimized: true,
};

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
