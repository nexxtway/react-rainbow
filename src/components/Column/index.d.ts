import { ReactNode, ComponentType } from 'react';

export interface ColumnProps {
    header?: ReactNode;
    component?: ComponentType;
    field?: string;
    sortable?: boolean;
    width?: number | string;
    defaultWidth?: number | string;
    type?: 'text' | 'action';
}

export default function(props: ColumnProps): JSX.Element | null;
