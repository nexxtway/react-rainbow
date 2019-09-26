import { BaseProps } from './../types';

export interface GMapProps extends BaseProps {
    apiKey: string;
    latitude?: number;
    longitude?: number;
    zoom?: number;
    header?: string | JSX.ElementChildrenAttribute;
}

export default function(props: GMapProps): JSX.Element | null;
