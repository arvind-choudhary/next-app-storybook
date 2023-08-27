'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { clsx } from 'clsx';

import {
  buttonVariants,
  ButtonProps,
  ButtonLabelProps,
  ButtonIconProps,
} from '@/shared/types/button.types';
import { combineClasses } from '@/shared/utilities/addClass';

export const Root = forwardRef(
  (
    {
      children,
      intent,
      size,
      fullWidth,
      rounded,
      textTransform,
      disabled,
      contentPlacement,
      className,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          focus: () => buttonRef.current?.focus(),
          click: () => buttonRef.current?.click(),
        };
      },
      [],
    );

    return (
      <button
        ref={buttonRef}
        className={combineClasses(
          'btn',
          buttonVariants({
            intent,
            size,
            fullWidth,
            rounded,
            textTransform,
            disabled,
            contentPlacement,
          }),
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export const Label = ({
  children,
  className = '',
  ...rest
}: ButtonLabelProps) => {
  return (
    <span className={clsx('btn-label', className)} {...rest}>
      {children}
    </span>
  );
};

export const Icon = ({ children, className, ...rest }: ButtonIconProps) => {
  return (
    <span className={clsx('btn-icon', className)} {...rest}>
      {children}
    </span>
  );
};
