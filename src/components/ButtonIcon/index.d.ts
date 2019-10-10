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
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onMouseDown?: (event: MouseEvent<HTMLElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    assistiveText?: string;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaHaspopup?: boolean;
    ariaPressed?: boolean;
    form?: string;
    id?: string;
}

declare const ButtonIcon: ComponentType<ButtonIconProps>;
export default ButtonIcon;
