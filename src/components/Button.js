import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

const Button = (props) => {
  const { variant, color, type, children, ...otherProps } = props;

  return (
    <MuiButton variant={variant} color={color} type={type} {...otherProps}>
      {children}
    </MuiButton>
  );
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  type: 'button',
};

export default Button;
