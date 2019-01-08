import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import Header from './header';
import './styles.css';

export default function Head(props) {
    const {
        columns,
        selectedColumn,
        sortDirection,
        onColumnSelect,
        resizeColumnDisabled,
        minColumnWidth,
        maxColumnWidth,
        columnsWidths,
        onResize,
    } = props;

    const isResizable = columnWidth => !resizeColumnDisabled && columnWidth === undefined;

    const getColumnWidth = (columnWidth, width) => {
        if (columnWidth === undefined) {
            return width;
        }
        return columnWidth;
    };

    if (columns) {
        return columns.map((column, index) => {
            const { header, sortable, width: columnDataWidth } = column;
            const isSelected = index === selectedColumn;
            const innerWidth = columnsWidths[index];
            return (
                <Header
                    key={uniqueId('header')}
                    content={header}
                    sortable={sortable}
                    sortDirection={sortDirection}
                    onColumnSelect={onColumnSelect}
                    onResize={onResize}
                    isSelected={isSelected}
                    isResizable={isResizable(columnDataWidth)}
                    width={getColumnWidth(columnDataWidth, innerWidth)}
                    minColumnWidth={minColumnWidth}
                    maxColumnWidth={maxColumnWidth}
                    columnIndex={index} />
            );
        });
    }
    return null;
}

Head.propTypes = {
    columns: PropTypes.array,
    columnsWidths: PropTypes.array,
    sortDirection: PropTypes.string,
    onColumnSelect: PropTypes.func,
    selectedColumn: PropTypes.number,
    resizeColumnDisabled: PropTypes.bool,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    onResize: PropTypes.func,
};

Head.defaultProps = {
    columns: undefined,
    columnsWidths: undefined,
    sortDirection: 'asc',
    onColumnSelect: () => {},
    selectedColumn: undefined,
    resizeColumnDisabled: false,
    minColumnWidth: 50,
    maxColumnWidth: 1000,
    onResize: () => {},
};
