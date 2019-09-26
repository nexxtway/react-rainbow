import { BaseProps } from './../types';

export interface TimelineMarkerProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    description?: string | JSX.ElementChildrenAttribute;
    datetime?: string | JSX.ElementChildrenAttribute;
    icon?: JSX.ElementChildrenAttribute;
}

export default function(props: TimelineMarkerProps): JSX.Element | null;
