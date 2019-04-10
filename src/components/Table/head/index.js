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
        } = this.props;

        if (columns) {
            return columns.map((column, index) => {
                const {
                    header,
                    field,
                    sortable,
                    computedWidth,
                } = column;
                const key = `header-${index}`;
                return (
                    <Header
                        key={key}
                        colIndex={index}
                        content={header}
                        sortable={sortable}
                        sortDirection={this.resolveSortDirection(field)}
                        onSort={onSort}
                        onResize={onResize}
                        isSelected={this.isSelected(field)}
                        computedWidth={computedWidth}
                        resizeColumnDisabled={resizeColumnDisabled}
                        minColumnWidth={minColumnWidth}
                        maxColumnWidth={maxColumnWidth}
                        field={field} />
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
};

Head.defaultProps = {
    columns: undefined,
    sortDirection: undefined,
    defaultSortDirection: 'asc',
    onSort: () => {},
    selectedColumn: undefined,
    resizeColumnDisabled: false,
    minColumnWidth: 50,
    maxColumnWidth: 1000,
    onResize: () => {},
};
