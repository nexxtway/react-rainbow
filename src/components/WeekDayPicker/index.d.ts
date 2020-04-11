import { ReactNode, ChangeEvent } from 'react';
import { BaseProps } from '../types';

export interface WeekDayPickerProps extends BaseProps {
    id?: string;
    name?: string;
    value?: string | Array<string>;
    label?: string | ReactNode;
    hideLabel?: boolean;
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    multiple?: boolean;
    error?: string | ReactNode;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
}

declare const WeekDayPicker: React.ComponentType<WeekDayPickerProps>;
export default WeekDayPicker;
