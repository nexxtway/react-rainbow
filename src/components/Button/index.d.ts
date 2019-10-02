import { ReactNode, MouseEvent, FocusEvent, KeyboardEvent, ComponentType } from 'react';
import { BaseProps, ButtonType } from '../types';

export interface ButtonProps extends BaseProps {
    label?: ReactNode;
    children?: ReactNode;
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
    type?: ButtonType;
    disabled?: boolean;
    tabIndex?: number | string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    ariaHaspopup?: boolean;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaPressed?: boolean;
    form?: string;
    id?: string;
    isLoading?: boolean;
}

declare const Button: ComponentType<ButtonProps>;
export default Button;
