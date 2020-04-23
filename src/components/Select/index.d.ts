import { ReactNode, ChangeEvent, MouseEvent, FocusEvent } from 'react';
import { BaseProps } from '../types';

export interface Option {
    label?: ReactNode;
    value?: ReactNode;
    disabled?: boolean;
}

export interface SelectProps extends BaseProps {
    label?: ReactNode;
    name?: string;
    value?: string | number;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    bottomHelpText?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    disabled?: boolean;
    options?: Option[];
    id?: string;
    hideLabel?: boolean;
}

declare const Select: React.ComponentType<SelectProps>;
export default Select;
