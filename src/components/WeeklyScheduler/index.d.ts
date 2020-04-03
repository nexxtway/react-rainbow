import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';

interface SchedulerEvent {
    title: string;
    start: Date;
    end: Date;
}

export interface WeeklySchedulerProps extends BaseProps {
    events: Array<SchedulerEvent>;
    date?: Date;
    minDate?: Date;
    maxDate?: Date;
    onChange?: (events: Array<SchedulerEvent>) => void;
}

export default function(props: WeeklySchedulerProps): JSX.Element | null;
