import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  children?: ReactNode;
  disabled?: boolean;
}

interface ButtonChildrenProps {
  className?: string;
  children: React.ReactNode;
}

export interface ButtonLabelProps extends ButtonChildrenProps {
  label?: string;
}

export interface ButtonIconProps extends ButtonChildrenProps {
  icon?: React.ReactNode;
}

export interface ButtonWithLoaderProps extends ButtonProps {
  showLoader?: boolean;
  label?: string;
}

export const BUTTON_CVA_OPTIONS = {
  variants: {
    size: {
      small: ['btn-size-sm'],
      medium: ['btn-size-md'],
      large: ['btn-size-lg'],
    },
    fullWidth: {
      true: 'w-full',
    },
    rounded: {
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    textTransform: {
      capitalize: 'capitalize',
      lowercase: 'lowercase',
      uppercase: 'uppercase',
      normal: 'normal-case',
    },
    disabled: {
      true: '',
    },
    contentPlacement: {
      center: 'inline-flex flex-row justify-center items-center text-center',
    },
    intent: {
      primary: ['btn-primary'],
      secondary: ['btn-secondary'],
      info: ['btn-info'],
      error: ['btn-error'],
      warning: ['btn-warning'],
      success: ['btn-success'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    contentPlacement: 'center',
  },
} as const;

export const buttonVariants = cva(['group'], BUTTON_CVA_OPTIONS);
