import { BaseProps } from './../types';

export interface MapMarkerProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    description?: string | JSX.ElementChildrenAttribute;
    latitude: number;
    longitude: number;
    icon?: string | JSX.ElementChildrenAttribute;
}

export default function(props: MapMarkerProps): JSX.Element | null;
