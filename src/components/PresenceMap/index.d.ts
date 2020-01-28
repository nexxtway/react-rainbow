import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface IPosition {
    lat: number;
    lng: number;
}

export interface MapObject {
    position: IPosition;
    heading?: number;
    image?: string | object;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface PresenceMapProps extends BaseProps {
    apiKey: string;
    objects?: MapObject[];
    style?: object;
    zoom?: number;
    center?: IPosition;
    showTraffic?: boolean;
    children?: ReactNode[] | ReactNode;
}

export default function(props: PresenceMapProps): JSX.Element | null;
