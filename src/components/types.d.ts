import { ReactNode, CSSProperties } from 'react';

export interface BaseProps {
    className?: string;
    style?: CSSProperties;
}

export type AvatarSize = 'x-small' | 'small' | 'medium' | 'large';
export type MenuSize = 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
export type MenuAlignment = 'left' | 'right' | 'bottom' | 'center' | 'bottom-right' | 'bottom-left';
export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonIconSize = 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
export type ButtonIconVariant =
    | 'base'
    | 'brand'
    | 'success'
    | 'border'
    | 'border-filled'
    | 'border-inverse'
    | 'inverse';
export type VisualPickerSize = 'small' | 'medium' | 'large';

export type IconPosition = 'left' | 'right';

export interface LookupValue {
    label?: string;
    description?: ReactNode;
    icon?: ReactNode;
}

export interface RadioOption {
    label?: ReactNode;
    value?: string;
    disabled?: boolean;
}
