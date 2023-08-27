import { BUTTON_CVA_OPTIONS } from '@/shared/types/button.types';
import { ICON_CVA_OPTIONS } from '@/shared/types/icon.types';

export const BUTTON_STORY_BOOK_BASE_OPTIONS = {
  argTypes: {
    intent: {
      control: 'inline-radio',
      options: Object.keys(BUTTON_CVA_OPTIONS.variants.intent),
      description: 'It supports below variants for the button.',
    },
    size: {
      control: 'inline-radio',
      options: Object.keys(BUTTON_CVA_OPTIONS.variants.size),
      description: 'Button support 3 different sizes.',
    },
    fullWidth: {
      control: 'boolean',
      description:
        'When fullWidth attribute will passed as prop then button width will be full',
    },
    rounded: {
      description: 'Rounded has four values. sm, md, lg, full',
      control: 'inline-radio',
      options: Object.keys(BUTTON_CVA_OPTIONS.variants.rounded),
    },
    textTransform: {
      description:
        'Text transform can be used to change text transformation css.',
      defaultValue: 'sm',
      control: 'inline-radio',
      options: Object.keys(BUTTON_CVA_OPTIONS.variants.textTransform),
    },
    onClick: { action: 'clicked' },
  },
} as const;

export const BUTTON_STORY_BOOK_BASE_ARGS = {
  intent: 'primary',
  contentPlacement: 'center',
  textTransform: 'uppercase',
  rounded: 'full',
  fullWidth: false,
} as const;

export const BUTTON_LOADER_BASE_OPTIONS_TYPES = {
  ...BUTTON_STORY_BOOK_BASE_OPTIONS,
  animate: {
    control: 'inline-radio',
  },
  iconSize: {
    control: 'inline-radio',
    options: Object.keys(ICON_CVA_OPTIONS.variants.iconSize),
  },
  iconColor: {
    control: 'color',
    options: Object.keys(ICON_CVA_OPTIONS.variants.iconColor),
  },
} as const;

export const BUTTON_LOADER_BASE_ARGS_OPTIONS_TYPES = {
  ...BUTTON_STORY_BOOK_BASE_ARGS,
  animate: 'spin',
  showLoader: true,
  iconSize: '20',
  iconColor: 'white',
  label: 'Button',
  spacingWithIcon: '2',
} as const;
