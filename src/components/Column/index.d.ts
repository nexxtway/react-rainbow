import { ReactNode, ComponentType } from 'react';

export interface ColumnProps<P> {
    header?: ReactNode;
    component?: ComponentType<P>;
    field?: string;
    sortable?: boolean;
    width?: number | string;
    defaultWidth?: number | string;
    type?: 'text' | 'action';
}

export default function<P>(props: ColumnProps<P> & P): JSX.Element | null;
