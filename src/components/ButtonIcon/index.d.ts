import { ReactNode, ComponentType, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { BaseProps, ButtonIconVariant, ButtonIconSize, ButtonType } from '../types';

export interface ButtonIconProps extends BaseProps {
    icon?: ReactNode;
    variant?: ButtonIconVariant;
    size?: ButtonIconSize;
    shaded?: boolean;
    title?: string;
    type?: ButtonType;
    disabled?: boolean;
    tabIndex?: number | string;
    tooltip?: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
    onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
    assistiveText?: string;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaHaspopup?: boolean;
    ariaPressed?: boolean;
    form?: string;
    id?: string;
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

declare const ButtonIcon: ComponentType<ButtonIconProps>;
export default ButtonIcon;
