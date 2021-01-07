import { ComponentType } from 'react';
import { BaseProps } from '../types';

export interface DraggableListProps<P> extends BaseProps {
    keyField: string;
    data?: object[];
    field?: string;
    onDragEnd?: (data: object[]) => void;
    component?: ComponentType<P>;
}

export default function<P>(props: DraggableListProps<P> & P): JSX.Element | null;
