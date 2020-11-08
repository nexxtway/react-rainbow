import { ComponentType } from 'react';
import { TableProps } from '../Table';

export interface TableWithBrowserPaginationProps extends TableProps {
    paginationAlignment?: 'center' | 'left' | 'right';
    pageSize?: number;
    variant?: 'default' | 'listview';
}

declare const TableWithBrowserPagination: ComponentType<TableWithBrowserPaginationProps>;
export default TableWithBrowserPagination;
