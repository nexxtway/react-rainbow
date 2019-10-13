import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface MapMarkerProps extends BaseProps {
    label?: ReactNode;
    description?: ReactNode;
    latitude?: number;
    longitude?: number;
    icon?: ReactNode;
}

export default function(props: MapMarkerProps): JSX.Element | null;
