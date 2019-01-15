/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
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
        resizeGuideLineHeight,
    } = props;

    const isResizable = columnWidth => !resizeColumnDisabled && columnWidth === undefined;

    const getColumnWidth = (width, defaultWidth, innerWidth) => {
        if (width === undefined) {
            if (defaultWidth === undefined) {
                return innerWidth;
            }
            return defaultWidth;
        }
        return width;
    };

    if (columns) {
        return columns.map((column, index) => {
            const { header, sortable, width, defaultWidth } = column;
            const isSelected = index === selectedColumn;
            const innerWidth = columnsWidths[index];
            return (
                <Header
                    key={`header-${index}`}
                    content={header}
                    sortable={sortable}
                    sortDirection={sortDirection}
                    onColumnSelect={onColumnSelect}
                    onResize={onResize}
                    isSelected={isSelected}
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
    onColumnSelect: PropTypes.func,
    selectedColumn: PropTypes.number,
    resizeColumnDisabled: PropTypes.bool,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    onResize: PropTypes.func,
    resizeGuideLineHeight: PropTypes.number,
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
    resizeGuideLineHeight: 0,
};
