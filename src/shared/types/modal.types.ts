import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonProps } from './button.types';
import { IIconProps } from './icon.types';

type IModalVariantProps = VariantProps<typeof modalVariants>;

export interface ModalProps
  extends Pick<IModalProps, 'className' | 'rounded' | 'intent'>,
    Pick<IIconProps, 'iconSize' | 'iconColor'> {
  children: React.ReactNode;
  onClose?: () => void;
  showCloseIcon?: boolean;
  icon?: React.ReactElement;
  showOverLay?: boolean;
}

type HeaderType = 'className' | 'headerContentPlacement';
export interface IHeaderProps
  extends Pick<IModalProps, HeaderType>,
    Pick<ModalProps, 'children'> {}

type FooterType = 'className' | 'footerContentPlacement';
export interface IFooterProps
  extends Pick<IModalProps, FooterType>,
    Pick<ModalProps, 'children'> {}

export interface IModalCloseIcon
  extends Pick<ModalProps, 'className' | 'iconColor' | 'iconSize'>,
    React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement;
}

export interface IModalProps extends IModalVariantProps {
  className?: string;
}

export const MODAL_CVA_OPTIONS = {
  variants: {
    intent: {
      danger: 'group bg-state-error',
      warning: 'group bg-state-warning',
      sucess: 'group bg-state-success',
      info: 'group bg-state-info',
    },
    root: {
      true: 'fixed inset-0 flex justify-center items-center',
    },
    overlay: {
      black: 'absolute inset-0 h-screen w-screen bg-black opacity-20 z-10',
    },
    mainContent: {
      true: 'flex flex-col w-11/12 gap-2 relative bg-white p-8 border-2 z-20 md:w-1/2 md:min-h-min',
    },
    header: {
      true: 'h-min min-h-max w-full col-start-2	col-end-13',
    },
    headerContentPlacement: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },
    footerContentPlacement: {
      center: 'justify-center',
      left: 'justify-start',
      right: 'justify-end',
    },
    bodyContentPlacement: {
      center: 'justify-center',
      left: 'justify-start',
      right: 'justify-end',
    },
    body: {
      true: 'overflow-auto my-2',
    },
    footer: {
      true: 'flex mt-2 w-full',
    },
    closeIcon: {
      true: 'absolute right-3 top-3',
    },
    rounded: {
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
    },
    iconSize: {
      '24': 'w-6',
      '20': 'w-5',
      '18': 'w-4',
    },
    iconColor: {
      white: 'stroke-white stroke-2',
      black: 'stroke-black stroke-2',
    },
  },
} as const;

export const modalVariants = cva([], MODAL_CVA_OPTIONS);
