import { ReactNode, ComponentType } from 'react';
import { BaseProps, LabelAlignment } from '../types';
import { DatePickerProps } from '../DatePicker';

export interface DateTimePickerProps extends DatePickerProps {
    cancelLabel?: ReactNode;
    okLabel?: ReactNode;
    hour24?: boolean;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    disabledDays?: Array<Date | string>;
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

declare const DatePicker: ComponentType<DateTimePickerProps>;
export default DatePicker;
