import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface MonthCalendarProps extends BaseProps {
    selectedDate?: string | Date;
    id?: string;
    maxDate?: Date;
    minDate?: Date;
    locale?: string;
    dateComponent: (date: Date) => ReactNode;
    onSelectDate?: (date: Date) => void;
    onMonthChanged: (date: Date) => void;
}

export default function(props: MonthCalendarProps): JSX.Element | null;
