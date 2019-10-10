import { ReactNode, MouseEvent, FocusEvent } from 'react';
import { BaseProps, ButtonIconVariant, ButtonIconSize, MenuSize, MenuAlignment } from '../types';

export interface ButtonMenuProps extends BaseProps {
    icon?: ReactNode;
    children?: ReactNode;
    buttonVariant?: ButtonIconVariant;
    buttonSize?: ButtonIconSize;
    buttonShaded?: boolean;
    menuSize?: MenuSize;
    menuAlignment?: MenuAlignment;
    disabled?: boolean;
    isLoading?: boolean;
    title?: string;
    assistiveText?: string;
    tabIndex?: number | string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    id?: string;
}

export default function(props: ButtonMenuProps): JSX.Element | null;
