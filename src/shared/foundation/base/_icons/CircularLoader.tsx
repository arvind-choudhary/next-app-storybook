import React from 'react';
import { IIconProps } from '@/shared/types/icon.types';

interface CircularLoaderIconProps extends Omit<IIconProps, 'icon'> {}

const CircularLoader = (props: CircularLoaderIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      className={props.iconSize!}
      aria-label="circular loader"
    >
      <path
        d="M18 1.0874C20.4891 2.22827 22.5132 4.18606 23.7363 6.63579C24.9593 9.08552 25.3079 11.8799 24.724 14.555C24.1402 17.2301 22.659 19.6251 20.5264 21.3424C18.3938 23.0597 15.7381 23.9961 13 23.9961C10.2619 23.9961 7.60618 23.0597 5.4736 21.3424C3.34102 19.6251 1.85987 17.2301 1.27601 14.555C0.692147 11.8799 1.04069 9.08552 2.26377 6.63579C3.48686 4.18606 5.51093 2.22827 8.00001 1.0874"
        className={props.iconColor!}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CircularLoader;
