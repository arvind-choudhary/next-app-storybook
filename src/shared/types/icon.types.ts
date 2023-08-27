import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonProps } from './button.types';

type IconVariantProps = VariantProps<typeof iconVariants>;
export interface IIconProps extends IconVariantProps {
  icon: React.ReactElement;
}

export const ICON_CVA_OPTIONS = {
  variants: {
    iconSize: {
      '24': 'w-6',
      '20': 'w-5',
      '18': 'w-4',
    }, // size of icon
    iconColor: {
      white: 'stroke-white stroke-2',
      black: 'stroke-black stroke-2',
    }, // color of icon
    animate: {
      spin: 'animate-spin',
    },
  },
  defaultVariants: {
    iconSize: '24',
    iconColor: 'white',
  },
} as const;

export const iconVariants = cva(
  ['flex-inline p-0.5 cursor-pointer'],
  ICON_CVA_OPTIONS,
);
