import { BaseProps } from './../types';

export interface CalendarProps extends BaseProps {
    value?: string | Date;
    maxDate?: Date;
    minDate?: Date;
    onChange?: (date: Date) => void;
}

declare const Calendar: React.ComponentType<CalendarProps>;
export default Calendar;
