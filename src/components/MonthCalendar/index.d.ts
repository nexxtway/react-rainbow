import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';

export interface MonthCalendarProps extends BaseProps {
    id?: string;
}

export default function(props: MonthCalendarProps): JSX.Element | null;
