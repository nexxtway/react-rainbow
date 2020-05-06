import { ReactNode, ChangeEvent, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { BaseProps, IconPosition } from '../types';

export interface PasswordStateLabels {
    weak?: ReactNode;
    average?: ReactNode;
    strong?: ReactNode;
}

export interface StrongPasswordInputProps extends BaseProps {
    value?: string;
    name?: string;
    label?: ReactNode;
    hideLabel?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    maxLength?: number;
    minLength?: number;
    bottomHelpText?: ReactNode;
    required?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: number | string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    id?: string;
    passwordState?: 'weak' | 'average' | 'strong';
    passwordStateLabels?: PasswordStateLabels;
}

export default function(props: StrongPasswordInputProps): JSX.Element | null;
