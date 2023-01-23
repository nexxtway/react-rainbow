import { ReactNode, FocusEvent } from 'react';
import { BaseProps, LabelAlignment } from '../types';

export interface MultiSelectOption {
    name?: string | number;
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
    isLoading?: boolean;
    variant?: 'default' | 'chip' | 'bare';
    chipVariant?: 'base' | 'neutral' | 'outline-brand' | 'brand';
    isBare?: boolean;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    value?: MultiSelectOption[];
    onChange?: (value: MultiSelectOption[]) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    children?: ReactNode;
    showCheckbox?: boolean;
    enableSearch?: boolean;
    size?: 'small' | 'medium' | 'large';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

export default function(props: MultiSelectProps): JSX.Element | null;
