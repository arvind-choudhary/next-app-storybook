'use client';

import React from 'react';
import {
  IFooterProps,
  IModalCloseIcon,
  IModalProps,
  ModalProps,
  modalVariants,
} from '@/shared/types/modal.types';
import { combineClasses } from '@/shared/utilities/addClass';
import { Close, Icon } from '../_icons';

export const Base = ({
  children,
  intent,
  onClose,
  className = '',
  showOverLay = true,
  rounded,
  showCloseIcon = true,
  icon,
  iconSize,
  iconColor,
}: ModalProps) => {
  return (
    <div className={combineClasses(modalVariants({ root: true }), className)}>
      {showOverLay ? (
        <div
          className={combineClasses(
            modalVariants({ overlay: showOverLay ? 'black' : null }),
            'modal-overlay',
          )}
          onClick={onClose}
        ></div>
      ) : (
        false
      )}
      <div
        tabIndex={0}
        autoFocus={true}
        aria-modal="true"
        role="alertdialog"
        aria-label="modal content"
        className={combineClasses(
          modalVariants({ mainContent: true, rounded }),
          modalVariants({ intent }),
          'modal-content',
        )}
      >
        {children}
        {showCloseIcon ? (
          <ModalCloseIcon
            icon={icon}
            onClick={onClose}
            iconColor={iconColor}
            iconSize={iconSize}
          />
        ) : (
          false
        )}
      </div>
    </div>
  );
};

type HeaderType = 'className' | 'headerContentPlacement';
interface IHeaderProps
  extends Pick<IModalProps, HeaderType>,
    Pick<ModalProps, 'children'> {}
export const Header = ({
  children,
  headerContentPlacement = 'center',
  className = '',
  ...rest
}: IHeaderProps) => {
  return (
    <div
      tabIndex={0}
      className={combineClasses(
        modalVariants({ header: true, headerContentPlacement }),
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

type BodyType = 'className' | 'children';
export const Body = ({
  children,
  ...restProps
}: Pick<ModalProps, BodyType>) => {
  return (
    <div tabIndex={0} {...restProps} className={modalVariants({ body: true })}>
      {children}
    </div>
  );
};

export const Footer = ({
  children,
  footerContentPlacement,
  ...restProps
}: IFooterProps) => {
  return (
    <div
      tabIndex={0}
      className={modalVariants({ footer: true, footerContentPlacement })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export const ModalCloseIcon = (props: IModalCloseIcon) => {
  const {
    icon = (
      <Icon
        icon={<Close />}
        iconColor={props.iconColor}
        iconSize={props.iconSize}
      />
    ),
    ...rest
  } = props;
  return React.isValidElement(icon) ? (
    <button
      {...rest}
      className={combineClasses(
        modalVariants({ closeIcon: true }),
        'modal-icon',
      )}
    >
      {React.cloneElement(icon)}
    </button>
  ) : (
    false
  );
};
