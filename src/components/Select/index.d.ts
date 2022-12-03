import { ReactNode, ChangeEvent, MouseEvent, FocusEvent } from 'react';
import { BaseProps, LabelAlignment } from '../types';

export interface Option {
    label?: ReactNode;
    value?: ReactNode;
    disabled?: boolean;
}

export interface SelectProps extends BaseProps {
    label?: ReactNode;
    name?: string;
    value?: string | number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    bottomHelpText?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    disabled?: boolean;
    options?: Option[];
    id?: string;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    tabIndex?: number | string;
    variant?: 'default' | 'shaded';
    size?: 'small' | 'medium' | 'large';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

declare const Select: React.ComponentType<SelectProps>;
export default Select;
