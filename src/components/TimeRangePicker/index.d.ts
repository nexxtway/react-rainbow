import { ComponentType } from 'react';
import { BaseProps } from '../types';

export interface TimeRangePickerProps extends BaseProps {
    value?: string;
    cancelLabel?: ReactNode;
    okLabel?: ReactNode;
    onChange?: (time: string) => void;
    placeholder?: string;
    label?: ReactNode;
    hideLabel?: boolean;
    required?: boolean;
    bottomHelpText?: ReactNode;
    error?: ReactNode;
    readOnly?: boolean;
    disabled?: boolean;
    tabIndex?: number | string;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (value: string) => void;
    onBlur?: (value: string) => void;
    id?: string;
    hour24?: boolean;
    sharpHours?: boolean;
    allowCustomTime?: boolean;
}

declare const TimeRangePicker: ComponentType<TimeRangePickerProps>;
export default TimeRangePicker;
