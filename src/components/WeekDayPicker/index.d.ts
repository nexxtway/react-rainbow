import { ReactNode, ChangeEvent } from 'react';
import { BaseProps, LabelAlignment } from '../types';

type WeekDays = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
type Value = WeekDays | WeekDays[];

export interface WeekDayPickerProps extends BaseProps {
    id?: string;
    name?: string;
    value?: Value;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    bottomHelpText?: ReactNode;
    availableDates?: WeekDays[];
    locale?: string;
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    multiple?: boolean;
    error?: ReactNode;
    onChange?: (value: Value) => void;
}

declare const WeekDayPicker: React.ComponentType<WeekDayPickerProps>;
export default WeekDayPicker;
