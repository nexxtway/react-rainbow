import { ComponentType } from 'react';
import { BaseProps } from '../types';

export interface CalendarProps extends BaseProps {
    id?: string;
    value?: string | Date | Date[];
    maxDate?: Date;
    minDate?: Date;
    onChange?: (date: Date) => void;
    selectionType?: 'single' | 'range';
    variant?: 'single' | 'double';
    locale?: string;
    disabledDays?: Array<string | Date>;
    highlightedDays?: Array<string | Date>;
}

declare const Calendar: ComponentType<CalendarProps>;
export default Calendar;
