import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import './styles.css';

export default class Head extends PureComponent {
    resolveSortDirection(field) {
        const { sortDirection, defaultSortDirection } = this.props;
        if (this.isSelected(field)) {
            return sortDirection;
        }
        return defaultSortDirection;
    }

    isSelected(field) {
        const { selectedColumn } = this.props;
        if (field) {
            return field === selectedColumn;
        }
        return false;
    }

    render() {
        const {
            columns,
            onSort,
            resizeColumnDisabled,
            minColumnWidth,
            maxColumnWidth,
            onResize,
            resizeGuideLineHeight,
        } = this.props;

        if (columns) {
            return columns.map((column, index) => {
                const { header, field, sortable, width, defaultWidth } = column;
                const key = `header-${index}`;
                return (
                    <Header
                        key={key}
                        content={header}
                        sortable={sortable}
                        sortDirection={this.resolveSortDirection(field)}
                        onSort={onSort}
                        onResize={onResize}
                        isSelected={this.isSelected(field)}
                        width={width}
                        defaultWidth={defaultWidth}
                        resizeColumnDisabled={resizeColumnDisabled}
                        minColumnWidth={minColumnWidth}
                        maxColumnWidth={maxColumnWidth}
                        columnIndex={index}
                        resizeGuideLineHeight={resizeGuideLineHeight} />
                );
            });
        }
        return null;
    }
}

Head.propTypes = {
    columns: PropTypes.array,
    sortDirection: PropTypes.string,
    defaultSortDirection: PropTypes.string,
    onSort: PropTypes.func,
    selectedColumn: PropTypes.string,
    resizeColumnDisabled: PropTypes.bool,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    onResize: PropTypes.func,
    resizeGuideLineHeight: PropTypes.number,
};

Head.defaultProps = {
    columns: undefined,
    sortDirection: undefined,
    defaultSortDirection: undefined,
    onSort: () => {},
    selectedColumn: undefined,
    resizeColumnDisabled: false,
    minColumnWidth: 50,
    maxColumnWidth: 1000,
    onResize: () => {},
    resizeGuideLineHeight: 0,
};
