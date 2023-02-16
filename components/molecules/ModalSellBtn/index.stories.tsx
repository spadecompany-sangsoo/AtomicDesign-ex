import ModalSellBtn from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../../atoms/Button';
import DocModalSellBtn from './index.doc';

export default {
  title: 'MOLECULES/ModalSellBtn',
  component: DocModalSellBtn,
};

export const Default = () => (
  <DocModalSellBtn>
    <Button
      btnSize={'small'}
      btnState={'destructive'}
      btnDisabled={false}
      btnOnClick={() => console.log('click')}
      text={'취소'}
    ></Button>
    <Button
      btnSize={'small'}
      btnState={'default'}
      btnDisabled={false}
      btnOnClick={() => console.log('click')}
      text={'확인'}
    ></Button>
  </DocModalSellBtn>
);

// export default {
//   title: 'MOLECULES/ModalSellBtn',
//   component: ModalSellBtn,
//   subcomponents: {
//     'ModalSellBtn.Button': ModalSellBtn.Button,
//   },
//   // argTypes: {
//   //   children: {
//   //     description: 'The content of the component.',
//   //     type: 'node',
//   //   },
//   // },
// };
//
// export const Default: ComponentStory<typeof ModalSellBtn> = (args, subcomponents) => {
//   return (
//     <ModalSellBtn {...args}>
//       <ModalSellBtn.Button {...subcomponents['ModalSellBtn.Button']} />
//     </ModalSellBtn>
//   );
// };

// export const Default = Template.bind({});
// Default.args = {
//   children: (
//     <>
//       <ModalSellBtn.Button
//         text={'버튼'}
//         btnOnClick={() => console.log('클릭')}
//         btnDisabled={false}
//         btnState={'default'}
//         btnSize={'small'}
//       ></ModalSellBtn.Button>
//     </>
//   ),
// };

// export const Default = () => (
//   <ModalSellBtn>
//     <ModalSellBtn.Button
//       text={'버튼'}
//       btnSize={'small'}
//       btnState={'default'}
//       btnDisabled={false}
//       btnOnClick={() => console.log('클릭')}
//     ></ModalSellBtn.Button>
//   </ModalSellBtn>
// );

// export default {
//   title: 'MOLECULES/ModalSellBtn',
//   component: ModalSellBtn,
// } as ComponentMeta<typeof ModalSellBtn>;

// export const Default = () => {
//   return (
//     <ModalSellBtn>
//       <ModalSellBtn.Button
//         btnSize={'small'}
//         btnState={'default'}
//         btnDisabled={false}
//         btnOnClick={() => console.log('click')}
//         text={'버튼'}
//       ></ModalSellBtn.Button>
//     </ModalSellBtn>
//   );
// };

// const btnConfirmHandler = () => {
//   alert(`asd`);
// };
//
// export const Default = () => (
//   <ModalSellBtn>
//     <ModalSellBtn.Button
//       text="Sell"
//       btnSize={'medium'}
//       btnState={'default'}
//       btnDisabled={false}
//       btnOnClick={btnConfirmHandler}
//     ></ModalSellBtn.Button>
//   </ModalSellBtn>
// );
