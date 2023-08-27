import type { Meta, StoryObj } from '@storybook/react';
import i18n from '../../../../i18n-config';

import * as ButtonComponent from '@/shared/foundation/base/_button/Button';
import {
  BUTTON_STORY_BOOK_BASE_OPTIONS,
  BUTTON_STORY_BOOK_BASE_ARGS,
} from './Button.stories.helper';
import { Icon, CircularLoader } from '@/shared/foundation/base/_icons';

const ButtonMeta: Meta<typeof ButtonComponent.Root> = {
  title: 'UI/foundation/button',
  tags: ['autodocs'],
  component: ButtonComponent.Root,
  ...BUTTON_STORY_BOOK_BASE_OPTIONS,
  args: BUTTON_STORY_BOOK_BASE_ARGS,
};

export default ButtonMeta;

type ButtonStoryType = StoryObj<typeof ButtonMeta>;

export const Button: ButtonStoryType = {
  render: (args) => {
    return (
      <ButtonComponent.Root {...args}>
        <ButtonComponent.Label>{i18n.t('button')}</ButtonComponent.Label>
      </ButtonComponent.Root>
    );
  },
};

export const ButtonWithLoader: ButtonStoryType = {
  render: (args) => (
    <ButtonComponent.Root {...args}>
      <ButtonComponent.Label>Button</ButtonComponent.Label>
      <ButtonComponent.Icon>
        <Icon
          icon={<CircularLoader />}
          iconSize="24"
          animate="spin"
          iconColor="white"
        />
      </ButtonComponent.Icon>
    </ButtonComponent.Root>
  ),
};
