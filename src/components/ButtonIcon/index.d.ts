import { ComponentType, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { BaseProps } from './../types';

export interface ButtonIconProps extends BaseProps {
    assistiveText?: string;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaHaspopup?: boolean;
    ariaPressed?: boolean;
    disabled?: boolean;
    form?: string;
    icon: JSX.ElementChildrenAttribute;
    id?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
    onMouseDown?: (event: MouseEvent<HTMLElement>) => void;
    shaded?: boolean;
    size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    tabIndex?: number | string;
    title?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?:
        | 'base'
        | 'brand'
        | 'success'
        | 'border'
        | 'border-filled'
        | 'border-inverse'
        | 'inverse';
}

declare const ButtonIcon: ComponentType<ButtonIconProps>;
export default ButtonIcon;
