import { ComponentType, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { BaseProps } from './../types';

export interface ButtonProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    variant?:
        | 'base'
        | 'neutral'
        | 'brand'
        | 'outline-brand'
        | 'destructive'
        | 'success'
        | 'inverse'
        | 'border-inverse';
    shaded?: boolean;
    title?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    tabIndex?: number | string;
    ariaHaspopup?: boolean;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaPressed?: boolean;
    form?: string;
    id?: string;
    isLoading?: boolean;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
}

declare const Button: ComponentType<ButtonProps>;
export default Button;
