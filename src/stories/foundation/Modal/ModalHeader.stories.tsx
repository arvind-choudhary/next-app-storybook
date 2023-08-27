import { Meta, StoryObj } from '@storybook/react';
import { IHeaderProps } from '@/shared/types/modal.types';
import * as ModalComponent from '@/shared/foundation/base/_modal/Modal';

const ModalHeaderMeta: Meta<IHeaderProps> = {
  title: 'UI/foundation/modal/ModalHeader',
  tags: ['autodocs'],
  component: ModalComponent.Header,
  argTypes: {
    headerContentPlacement: {
      control: 'inline-radio',
      description: 'Header content can be placed in center, left and right',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    children: <h1>Header</h1>,
  },
};

export default ModalHeaderMeta;

type ModalHeaderStory = StoryObj<typeof ModalHeaderMeta>;

export const ModalHeader: ModalHeaderStory = {
  args: {
    headerContentPlacement: 'center',
  },
};
