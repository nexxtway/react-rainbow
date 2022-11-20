import {
    ComponentType,
    ReactNode,
    ChangeEvent,
    MouseEvent,
    FocusEvent,
    KeyboardEvent,
} from 'react';
import { BaseProps, LabelAlignment } from '../types';

export interface CounterInputProps extends BaseProps {
    id?: string;
    name?: string;
    value?: number;
    placeholder?: string;
    tabIndex?: number | string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    min?: number | string;
    max?: number | string;
    isBare?: boolean;
    error?: ReactNode;
    step?: number;
    variant?: 'default' | 'shaded' | 'bare';
    onChange?: (value: number) => void;
    onFocus?: (value: number) => void;
    onBlur?: (value: number) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    bottomHelpText?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

declare const CounterInput: ComponentType<CounterInputProps>;
export default CounterInput;
