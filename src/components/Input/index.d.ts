import {
    ComponentType,
    ReactNode,
    ChangeEvent,
    MouseEvent,
    FocusEvent,
    KeyboardEvent,
} from 'react';
import { BaseProps, IconPosition } from '../types';

type InputType =
    | 'text'
    | 'password'
    | 'datetime'
    | 'datetime-local'
    | 'date'
    | 'month'
    | 'time'
    | 'week'
    | 'number'
    | 'email'
    | 'url'
    | 'search'
    | 'tel'
    | 'color'
    | 'radio'
    | 'checkbox';

export interface InputProps extends BaseProps {
    value?: string | boolean;
    name?: string;
    type?: InputType;
    label?: ReactNode;
    hideLabel?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    maxLength?: number;
    minLength?: number;
    bottomHelpText?: ReactNode;
    required?: boolean;
    pattern?: string;
    isCentered?: boolean;
    isBare?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: number | string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    checked?: boolean;
    id?: string;
    autoComplete?: string;
}

declare const Input: ComponentType<InputProps>;
export default Input;
