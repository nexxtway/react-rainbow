import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface TableWithBrowserPaginationProps extends BaseProps {
    paginationAlignment?: 'center' | 'left' | 'right';
    pageSize?: number;
    data?: [];
}

declare const TableWithBrowserPagination: React.ComponentType<TableWithBrowserPaginationProps>;
export default TableWithBrowserPagination;
