import { ReactNode, ComponentType, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface TableProps extends BaseProps {
    data?: object[];
    sortedBy?: string;
    sortDirection?: 'asc' | 'desc';
    defaultSortDirection?: 'asc' | 'desc';
    onSort?: (event: MouseEvent<HTMLElement>, field: string, nextSortDirection: string) => void;
    resizeColumnDisabled?: boolean;
    minColumnWidth?: string | number;
    maxColumnWidth?: string | number;
    showCheckboxColumn?: boolean;
    onRowSelection?: (rows: object[]) => void;
    maxRowSelection?: string | number;
    selectedRows?: [];
    keyField: string;
    isLoading?: boolean;
    emptyIcon?: ReactNode;
    emptyTitle?: ReactNode;
    emptyDescription?: ReactNode;
    id?: string;
    children?: ReactNode;
}

declare const Table: ComponentType<TableProps>;
export default Table;
