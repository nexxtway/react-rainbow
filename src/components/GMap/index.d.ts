import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface GMapProps extends BaseProps {
    apiKey: string;
    latitude?: number;
    longitude?: number;
    zoom?: number;
    header?: ReactNode;
    children?: ReactNode;
}

export default function(props: GMapProps): JSX.Element | null;
