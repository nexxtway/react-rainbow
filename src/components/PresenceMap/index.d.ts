import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface IPosition {
    lat?: number;
    lng?: number;
}

export interface ISymbol {
    path: string;
    fillColor?: string;
    fillOpacity?: number;
    scale?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    rotation?: number;
}

export interface IMarker {
    position: IPosition;
    icon?: ISymbol;
}

export interface PresenceMapProps extends BaseProps {
    apiKey: string;
    markers?: IMarker[];
    zoom?: number;
    center?: IPosition | 'auto';
    showTraffic?: boolean;
    showTransit?: boolean;
    children?: ReactNode;
    type?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
    onMarkerClick: function;
}

export default function(props: PresenceMapProps): JSX.Element | null;
