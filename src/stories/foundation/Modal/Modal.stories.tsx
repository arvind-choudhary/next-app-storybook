import { Meta, StoryObj } from '@storybook/react';

import * as ModalComponent from '@/shared/foundation/base/_modal/Modal';
import { ModalProps, MODAL_CVA_OPTIONS } from '@/shared/types/modal.types';

const ModalBaseMeta: Meta<ModalProps> = {
  title: 'UI/foundation/modal/Base',
  tags: ['autodocs'],
  component: ModalComponent.Base,
  argTypes: {
    onClose: { action: 'clicked' },
    intent: {
      control: 'inline-radio',
      options: Object.keys(MODAL_CVA_OPTIONS.variants.intent),
    },
  },
};

export default ModalBaseMeta;
type ModalStory = StoryObj<typeof ModalBaseMeta>;

export const Modal: ModalStory = {
  args: {
    showOverLay: true,
    showCloseIcon: true,
  },
};
