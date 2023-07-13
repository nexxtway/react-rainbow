import {
    ComponentType,
    ReactNode,
    ChangeEvent,
    MouseEvent,
    FocusEvent,
    KeyboardEvent,
} from 'react';
import { BaseProps, IconPosition, LabelAlignment } from '../types';

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
    value?: string | boolean | number;
    name?: string;
    type?: InputType;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    max?: number | string;
    min?: number | string;
    step?: number | string;
    maxLength?: number;
    minLength?: number;
    bottomHelpText?: ReactNode;
    required?: boolean;
    pattern?: string;
    /**
     * @deprecated use 'valueAlignment' instead
     */
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
    variant?: 'default' | 'shaded' | 'bare';
    autoComplete?: string;
    size?: 'small' | 'medium' | 'large';
    valueAlignment?: 'left' | 'center' | 'right';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

declare const Input: ComponentType<InputProps>;
export default Input;
