import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const combineClasses = (...args: any) => {
  return twMerge(clsx(args));
};
