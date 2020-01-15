import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface GMapProps extends BaseProps {
    apiKey: string;
    latitude?: number;
    longitude?: number;
    zoom?: number;
    header?: ReactNode;
    children?: ReactNode;
    showTraffic?: boolean;
    showTransit?: boolean;
    dayNightMode?: string;
    currentPosition?: boolean;
}

export default function(props: GMapProps): JSX.Element | null;
