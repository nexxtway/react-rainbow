import { ComponentType, ReactNode, MouseEvent, FocusEvent } from 'react';
import { BaseProps } from '../types';

export interface TimePickerProps extends BaseProps {
    value?: string;
    cancelLabel?: ReactNode;
    okLabel?: ReactNode;
    onChange?: (time: string) => void;
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
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (value: string) => void;
    onBlur?: (value: string) => void;
    id?: string;
    hour24?: boolean;
}

declare const TimePicker: ComponentType<TimePickerProps>;
export default TimePicker;
