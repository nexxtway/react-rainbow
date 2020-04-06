import { ComponentType } from 'react';
import { BaseProps } from '../types';

export interface TimeRangePickerProps extends BaseProps {
    id?: string;
    hour24?: boolean;
    start?: string;
    end?: string;
    label?: string;
    required?: boolean;
    hideLabel?: boolean;
}

declare const TimeRangePicker: ComponentType<TimeRangePickerProps>;
export default TimeRangePicker;
