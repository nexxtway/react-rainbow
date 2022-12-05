import { ComponentType, ReactNode, MouseEvent, FocusEvent } from 'react';
import { BaseProps, LabelAlignment } from '../types';

export interface TimePickerProps extends BaseProps {
    value?: string;
    cancelLabel?: ReactNode;
    okLabel?: ReactNode;
    onChange?: (time: string) => void;
    placeholder?: string;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    required?: boolean;
    name?: string;
    bottomHelpText?: ReactNode;
    /**
     * @deprecated use 'valueAlignment' instead
     */
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
    icon?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    valueAlignment?: 'left' | 'center' | 'right';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

declare const TimePicker: ComponentType<TimePickerProps>;
export default TimePicker;
