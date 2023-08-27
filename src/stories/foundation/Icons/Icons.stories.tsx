import { Meta, StoryObj } from '@storybook/react';

import {
  Close,
  Icon,
  CircularLoader,
  Warning,
} from '@/shared/foundation/base/_icons';
import React from 'react';

const IconMetaObj: Meta<typeof Icon> = {
  title: 'UI/foundation/icons',
  component: Icon,
  render: (args) => <Icon {...args} />,
  tags: ['autodocs'],
  argTypes: {
    animate: {
      control: 'inline-radio',
      description: 'We can use animate prop with loaders.',
      defaultValue: false,
    },
    iconColor: {
      control: 'color',
      defaultValue: 'black',
      description: 'Icon color.',
    },
    iconSize: {
      control: 'inline-radio',
      defaultValue: '24',
      description: 'Icon size.',
    },
  },
  args: {
    iconColor: 'black',
    iconSize: '24',
  },
};

export default IconMetaObj;

type IconStoryObj = StoryObj<typeof IconMetaObj>;

const StaticIconsArray = [<Close />, <Warning />];

export const Static_Icons: Omit<IconStoryObj, 'animate'> = {
  render: (args) => (
    <div className="flex flex-row gap-4">
      {StaticIconsArray.map((iconComponent) => {
        return <Icon {...args} icon={iconComponent} />;
      })}
    </div>
  ),
};

const AnimatedIconsArray = [<CircularLoader />];

export const Animated_Icons: IconStoryObj = {
  render: (args) => (
    <div className="flex flex-row gap-4">
      {AnimatedIconsArray.map((iconComponent) => {
        return <Icon {...args} icon={iconComponent} />;
      })}
    </div>
  ),
  args: {
    animate: 'spin',
  },
};
