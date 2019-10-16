import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';
import { DatePickerProps } from '../DatePicker';

export interface DateTimePickerProps extends DatePickerProps {
    cancelLabel?: ReactNode;
    okLabel?: ReactNode;
}

declare const DatePicker: ComponentType<DateTimePickerProps>;
export default DatePicker;
