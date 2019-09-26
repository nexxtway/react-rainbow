import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface TableProps extends BaseProps {
    // data?: ;
    sortedBy?: string;
    sortDirection?: 'asc' | 'desc';
    defaultSortDirection?: 'asc' | 'desc';
    // onSort?: ;
    resizeColumnDisabled?: boolean;
    minColumnWidth?: string | number;
    maxColumnWidth?: string | number;
    showCheckboxColumn?: boolean;
    // onRowSelection?: ;
    maxRowSelection?: string | number;
    selectedRows?: [];
    keyField: string;
    isLoading?: boolean;
    emptyIcon?: JSX.ElementChildrenAttribute;
    emptyTitle?: string | JSX.ElementChildrenAttribute;
    emptyDescription?: string | JSX.ElementChildrenAttribute;
    id?: string;
}

declare const Table: React.ComponentType<TableProps>;
export default Table;
