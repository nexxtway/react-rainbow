export interface BaseProps {
    className?: string;
    style?: CSS.style;
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
