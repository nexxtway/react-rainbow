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
            ...rest
        } = this.props;

        if (columns) {
            return columns.map((column, index) => {
                const {
                    header,
                    field,
                    sortable,
                    computedWidth,
                    type,
                } = column;
                const key = `header-${index}`;

                return (
                    <Header
                        {...rest}
                        key={key}
                        colIndex={index}
                        content={header}
                        sortable={sortable}
                        sortDirection={this.resolveSortDirection(field)}
                        isSelected={this.isSelected(field)}
                        computedWidth={computedWidth}
                        field={field}
                        type={type} />
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
    selectedColumn: PropTypes.string,
};

Head.defaultProps = {
    columns: undefined,
    sortDirection: undefined,
    defaultSortDirection: 'asc',
    selectedColumn: undefined,
};
