import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface IPosition {
    lat: number;
    lng: number;
}

export interface MapObject {
    position: IPosition;
    heading?: number;
    image?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface MapControl {
    position?: string;
    title?: string;
    text?: string;
    action?: string;
}

export interface PresenceMapProps extends BaseProps {
    apiKey: string;
    objects?: MapObject[];
    zoom?: number | 'auto';
    center?: IPosition | 'auto';
    showTraffic?: boolean;
    showTransit?: boolean;
    controls?: MapControl[];
}

export default function(props: PresenceMapProps): JSX.Element | null;
