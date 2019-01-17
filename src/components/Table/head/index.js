import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import './styles.css';

function getColumnWidth(width, defaultWidth, innerWidth) {
    if (innerWidth === undefined) {
        if (defaultWidth === undefined) {
            return width;
        }
        return defaultWidth;
    }
    return innerWidth;
}

export default function Head(props) {
    const {
        columns,
        selectedColumn,
        sortDirection,
        defaultSortDirection,
        onColumnSelect,
        resizeColumnDisabled,
        minColumnWidth,
        maxColumnWidth,
        columnsWidths,
        onResize,
        resizeGuideLineHeight,
    } = props;

    const isResizable = columnWidth => !resizeColumnDisabled && columnWidth === undefined;

    const resolveSortDirection = (isSelected) => {
        if (isSelected) {
            return sortDirection;
        }
        return defaultSortDirection;
    };

    const isSelected = (field) => {
        if (field) {
            return field === selectedColumn;
        }
        return false;
    };

    if (columns) {
        return columns.map((column, index) => {
            const { header, field, sortable, width, defaultWidth } = column;
            const innerWidth = columnsWidths[index];
            const key = `header-${index}`;
            return (
                <Header
                    key={key}
                    content={header}
                    sortable={sortable}
                    sortDirection={resolveSortDirection(isSelected(field))}
                    onColumnSelect={onColumnSelect}
                    onResize={onResize}
                    isSelected={isSelected(field)}
                    isResizable={isResizable(width)}
                    width={getColumnWidth(width, defaultWidth, innerWidth)}
                    minColumnWidth={minColumnWidth}
                    maxColumnWidth={maxColumnWidth}
                    columnIndex={index}
                    resizeGuideLineHeight={resizeGuideLineHeight} />
            );
        });
    }
    return null;
}

Head.propTypes = {
    columns: PropTypes.array,
    columnsWidths: PropTypes.array,
    sortDirection: PropTypes.string,
    defaultSortDirection: PropTypes.string,
    onColumnSelect: PropTypes.func,
    selectedColumn: PropTypes.string,
    resizeColumnDisabled: PropTypes.bool,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    onResize: PropTypes.func,
    resizeGuideLineHeight: PropTypes.number,
};

Head.defaultProps = {
    columns: undefined,
    columnsWidths: undefined,
    sortDirection: undefined,
    defaultSortDirection: 'asc',
    onColumnSelect: () => {},
    selectedColumn: undefined,
    resizeColumnDisabled: false,
    minColumnWidth: 50,
    maxColumnWidth: 1000,
    onResize: () => {},
    resizeGuideLineHeight: 0,
};
