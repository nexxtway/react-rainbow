import { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { BaseProps, IconPosition, LabelAlignment } from '../types';

export interface PercentInputProps extends BaseProps {
    value?: number | string;
    name?: string;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    bottomHelpText?: ReactNode;
    required?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: number | string;
    onChange?: (value?: string) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    id?: string;
    variant?: 'default' | 'shaded' | 'bare';
    locale?: string;
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
    size?: 'small' | 'medium' | 'large';
    valueAlignment?: 'left' | 'center' | 'right';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

export default function(props: PercentInputProps): JSX.Element | null;
