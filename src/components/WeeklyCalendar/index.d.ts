import { BaseProps } from '../types';

export interface CalendarEvent {
    id: string;
    title: string;
    description?: string;
    startDate: Date;
    endDate: Date;
}

export interface WeeklyCalendarEvent {
    week: Date;
}

export interface WeeklyCalendarProps extends BaseProps {
    events?: Array<CalendarEvent>;
    currentWeek?: Date | string;
    minDate?: Date;
    maxDate?: Date;
    onWeekChange?: (event: WeeklyCalendarEvent) => void;
    onEventClick?: (event: CalendarEvent) => void;
    locale?: string;
}

export default function(props: WeeklyCalendarProps): JSX.Element | null;
