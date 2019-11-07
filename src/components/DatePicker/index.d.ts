import { ReactNode, MouseEvent, ComponentType } from 'react';
import { BaseProps } from '../types';

type Value = string | Date;

export interface DatePickerProps extends BaseProps {
    value?: Value;
    maxDate?: Date;
    minDate?: Date;
    formatStyle?: 'small' | 'medium' | 'large';
    onChange?: (date: Date) => void;
    placeholder?: string;
    label?: ReactNode;
    hideLabel?: boolean;
    required?: boolean;
    name?: string;
    bottomHelpText?: ReactNode;
    isCentered?: boolean;
    error?: ReactNode;
    readOnly?: boolean;
    disabled?: boolean;
    tabIndex?: number | string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: Value) => void;
    onBlur?: (event: Value) => void;
    id?: string;
    locale?: string;
}

declare const DatePicker: ComponentType<DatePickerProps>;
export default DatePicker;
