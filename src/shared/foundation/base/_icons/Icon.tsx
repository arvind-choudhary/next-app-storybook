import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { IIconProps, iconVariants } from '@/shared/types/icon.types';
import * as Button from '@/shared/foundation/base/_button/Button';
import { combineClasses } from '@/shared/utilities/addClass';

interface IconPropsInt extends IIconProps {}

const Icon = ({
  icon,
  iconColor = 'black',
  animate,
  iconSize = '24',
  ...restProps
}: IconPropsInt) => {
  return React.cloneElement(icon, {
    iconSize: combineClasses(iconVariants({ iconSize, animate })),
    iconColor: combineClasses(iconVariants({ iconColor })),
    ...restProps,
  });
};

export default Icon;
