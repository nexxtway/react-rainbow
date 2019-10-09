import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface TimelineMarkerProps extends BaseProps {
    label?: ReactNode;
    description?: ReactNode;
    datetime?: ReactNode;
    icon?: ReactNode;
    children?: ReactNode;
}

export default function(props: TimelineMarkerProps): JSX.Element | null;
