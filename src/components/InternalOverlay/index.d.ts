import { RefObject, ComponentClass, FunctionComponent, ReactNode } from 'react';

type TriggerElementRefFunction = () => RefObject<HTMLElement>;

interface Position {
    top: number;
    left: number;
}

interface Coordinates {
    x: number;
    y: number;
}

interface Size {
    width: number;
    height: number;
}

interface TriggerMeta extends Size {
    leftUpAnchor: Coordinates;
    leftBottomAnchor: Coordinates;
    rightUpAnchor: Coordinates;
    rightBottomAnchor: Coordinates;
}

interface PositionResolverOpts {
    trigger: TriggerMeta;
    viewport: Size;
    content: Size;
}

export interface InternalOverlayProps {
    render?: ComponentClass | FunctionComponent;
    isVisible?: boolean;
    triggerElementRef?: RefObject<HTMLElement> | TriggerElementRefFunction;
    positionResolver?: (opts: PositionResolverOpts) => Position;
    onOpened?: () => void;
    keepScrollEnabled?: boolean;
    children?: ReactNode;
}

export default function(props: InternalOverlayProps): JSX.Element | null;
