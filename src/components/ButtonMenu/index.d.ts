import { FocusEvent } from 'react';
import { BaseProps } from './../types';

export interface ButtonMenuProps extends BaseProps {
    assistiveText?: string;
    buttonShaded?: boolean;
    buttonSize?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    buttonVariant?:
        | 'base'
        | 'brand'
        | 'success'
        | 'border'
        | 'border-filled'
        | 'border-inverse'
        | 'inverse';
    disabled?: boolean;
    icon: JSX.ElementChildrenAttribute;
    id?: string;
    isLoading?: boolean;
    menuSize?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    menuAlignment?: 'left' | 'right' | 'bottom' | 'center' | 'bottom-right' | 'bottom-left';
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    tabIndex?: number | string;
    title?: string;
}

export default function(props: ButtonMenuProps): JSX.Element | null;
