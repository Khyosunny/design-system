import { ButtonHTMLAttributes, forwardRef } from 'react';
import { EColors, EFontSizes, EFontWeight } from '../styles';
import { ButtonColor, ButtonSize, ButtonVariant } from '..';
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  label?: string;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    variant = 'default',
    size = 'lg',
    color = 'blue',
    label,
    disabled,
    fullWidth,
    ...restProps
  } = props;
  return (
    <button
      // variant={variant}
      // size={size}
      // color={color}
      // disabled={disabled}
      // fullWidth={fullWidth}
      ref={ref}
      {...restProps}
    >
      {label}
    </button>
  );
});

export default Button;
