import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactElement;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};

interface ButtonLabelProps {
  label?: string;
  className?: string;
}

const ButtonLabel = ({ label = 'Button', ...rest }: ButtonLabelProps) => {
  return <span {...rest}>{label}</span>;
};

interface ButtonIconProps {
  icon?: React.ReactNode;
  className?: string;
}

const ButtonIcon = ({ icon, ...rest }: ButtonIconProps) => {
  return <span {...rest}>{icon}</span>;
};

export default Button;
