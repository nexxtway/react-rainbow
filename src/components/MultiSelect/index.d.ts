import { ReactNode, FocusEvent } from 'react';
import { BaseProps } from '../types';

export interface MultiSelectOption {
    name?: string;
    label?: string;
    value?: any;
}

export interface MultiSelectProps extends BaseProps {
    label?: ReactNode;
    placeholder?: string;
    error?: ReactNode;
    bottomHelpText?: ReactNode;
    tabIndex?: string | number;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    variant?: 'default' | 'bare';
    chipVariant?: 'base' | 'neutral' | 'outline-brand' | 'brand';
    hideLabel?: boolean;
    value?: MultiSelectOption | MultiSelectOption[];
    onChange?: (value: MultiSelectOption[]) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    children?: ReactNode;
}

export default function(props: MultiSelectProps): JSX.Element | null;
