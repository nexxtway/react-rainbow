import { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { BaseProps } from '../types';

export interface PhoneInputValue {
    countryCode?: string;
    isoCode?: string;
    phone?: string;
}

export interface PhoneInputProps extends BaseProps {
    id?: string;
    name?: string;
    label?: ReactNode;
    hideLabel?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    bottomHelpText?: ReactNode;
    required?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: number | string;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (value: PhoneInputValue) => void;
    value?: PhoneInputValue;
    countries?: Array<string>;
    locale: string;
}

export default function(props: PhoneInputProps): JSX.Element | null;
