import { ComponentType } from 'react';
import { BaseProps } from '../types';

export interface CalendarProps extends BaseProps {
    id?: string;
    value?: string | Date;
    maxDate?: Date;
    minDate?: Date;
    onChange?: (date: Date) => void;
    selectionType?: 'single' | 'range';
    variant?: 'single' | 'double';
    locale?: string;
}

declare const Calendar: ComponentType<CalendarProps>;
export default Calendar;
