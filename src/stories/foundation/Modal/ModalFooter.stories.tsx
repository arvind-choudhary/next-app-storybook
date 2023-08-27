import { Meta, StoryObj } from '@storybook/react';
import { IFooterProps } from '@/shared/types/modal.types';
import * as ModalComponent from '@/shared/foundation/base/_modal/Modal';
import * as Button from '@/shared/foundation/base/_button/Button';

const ModalFooterMeta: Meta<IFooterProps> = {
  title: 'UI/foundation/modal/ModalFooter',
  tags: ['autodocs'],
  component: ModalComponent.Footer,
  argTypes: {
    footerContentPlacement: {
      control: 'inline-radio',
      description: 'Fotter content can be placed in center, left and right.',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    footerContentPlacement: 'center',
  },
};

export default ModalFooterMeta;

type ModalHeaderStory = StoryObj<typeof ModalFooterMeta>;

export const ModalFooter: ModalHeaderStory = {
  args: {
    footerContentPlacement: 'center',
    children: (
      <div className="flex flex-row w-full gap-2">
        <Button.Root fullWidth={true}>
          <Button.Label>Submit</Button.Label>
        </Button.Root>
        <Button.Root fullWidth={true}>
          <Button.Label>Cancel</Button.Label>
        </Button.Root>
      </div>
    ),
  },
};

export const ModalFooterCenterPlacementInline: ModalHeaderStory = {
  args: {
    footerContentPlacement: 'center',
    children: (
      <div className="flex flex-row gap-2">
        <Button.Root>
          <Button.Label>Submit</Button.Label>
        </Button.Root>
        <Button.Root>
          <Button.Label>Cancel</Button.Label>
        </Button.Root>
      </div>
    ),
  },
};

export const DiffrentButtonTheme: ModalHeaderStory = {
  args: {
    footerContentPlacement: 'center',
    children: (
      <div className="flex flex-row gap-2">
        <Button.Root intent={'success'}>
          <Button.Label>Submit</Button.Label>
        </Button.Root>
        <Button.Root intent={'info'}>
          <Button.Label>Cancel</Button.Label>
        </Button.Root>
      </div>
    ),
  },
};
