import { ReactNode } from 'react';
import { BaseProps } from '../types';

interface OnSelectDateEventShape {
    date: Date;
}

interface OnMonthChangeEventShape {
    month: Date;
}

export interface MonthlyCalendarProps extends BaseProps {
    selectedDate?: string | Date;
    currentMonth?: string | Date;
    id?: string;
    maxDate?: Date;
    minDate?: Date;
    locale?: string;
    dateComponent?: (date: Date) => ReactNode;
    onSelectDate?: (value: OnSelectDateEventShape) => void;
    onMonthChange?: (value: OnMonthChangeEventShape) => void;
}

export default function(props: MonthlyCalendarProps): JSX.Element | null;
