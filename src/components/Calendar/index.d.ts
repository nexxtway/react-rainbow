import { ComponentType } from 'react';
import { BaseProps } from '../types';

export interface CalendarProps extends BaseProps {
    value?: string | Date;
    maxDate?: Date;
    minDate?: Date;
    onChange?: (date: Date) => void;
    locale?: string;
    variant?: 'single' | 'double';
}

declare const Calendar: ComponentType<CalendarProps>;
export default Calendar;
