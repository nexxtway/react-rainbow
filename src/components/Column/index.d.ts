import { ReactNode, ComponentType } from 'react';

export interface ColumnProps<P> {
    header?: ReactNode;
    headerAlignment?: 'left' | 'center' | 'right';
    component?: ComponentType<P>;
    field?: string;
    sortable?: boolean;
    width?: number | string;
    defaultWidth?: number | string;
    type?: 'text' | 'action' | string;
    isEditable?: boolean | (({ value: string, row: object, index: number }) => boolean);
    onChange?: ({ value: string, row: object }) => void;
    cellAlignment?: 'left' | 'right' | 'center';
}

export default function<P>(props: ColumnProps<P> & P): JSX.Element | null;
