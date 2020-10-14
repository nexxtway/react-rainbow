import { BaseProps } from '../types';

export interface LoadingShapeProps extends BaseProps {
    variant?: 'solid' | 'image' | 'avatar';
    shape?: 'circle' | 'rect' | 'rounded-rect' | 'square';
}

export default function(props: LoadingShapeProps): JSX.Element | null;
