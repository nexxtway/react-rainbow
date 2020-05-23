import { RefObject, ComponentClass, FunctionComponent } from 'react';

type TriggerElementRefFunction = () => RefObject;

interface Position {
    top: number;
    left: number;
}

export interface InternalOverlayProps {
    render: ComponentClass | FunctionComponent;
    isVisible?: boolean;
    triggerElementRef: RefObject | TriggerElementRefFunction;
    positionResolver: () => Position;
}

export default function(props: InternalOverlayProps): JSX.Element | null;
