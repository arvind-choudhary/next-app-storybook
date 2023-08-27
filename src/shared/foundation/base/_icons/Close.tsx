import { IIconProps } from '@/shared/types/icon.types';
import { combineClasses } from '@/shared/utilities/addClass';

interface CloseIconProps extends Pick<IIconProps, 'iconSize' | 'iconColor'> {}

const Close = ({ iconColor, iconSize }: CloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconSize!}
      viewBox="0 0 50 50"
    >
      <path
        d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
        className={iconColor!}
      ></path>
    </svg>
  );
};

export default Close;
