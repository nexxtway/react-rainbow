import { ReactNode, MouseEvent, FocusEvent, KeyboardEvent, ComponentType } from 'react';
import { BaseProps, ButtonType, ButtonIconVariant } from '../types';

export interface ButtonProps extends BaseProps {
    label?: ReactNode;
    children?: ReactNode;
    variant?: ButtonIconVariant;
    shaded?: boolean;
    title?: string;
    type?: ButtonType;
    disabled?: boolean;
    tabIndex?: number | string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
    onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
    ariaHaspopup?: boolean;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaPressed?: boolean;
    form?: string;
    id?: string;
    isLoading?: boolean;
    size?: 'small' | 'medium' | 'large';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

declare const Button: ComponentType<ButtonProps>;
export default Button;
