import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './header';

export default class Head extends PureComponent {
    resolveSortDirection(field) {
        const { sortDirection, defaultSortDirection } = this.props;
        if (this.isSorted(field)) {
            return sortDirection;
        }
        return defaultSortDirection;
    }

    isSorted(field) {
        const { sortedBy } = this.props;
        if (field) {
            return field === sortedBy;
        }
        return false;
    }

    render() {
        const { columns, ...rest } = this.props;

        if (columns) {
            return columns.map((column, index) => {
                const { header, field, ...columnRest } = column;
                const key = `header-${index}`;

                return (
                    <Header
                        {...rest}
                        {...columnRest}
                        key={key}
                        colIndex={index}
                        content={header}
                        sortDirection={this.resolveSortDirection(field)}
                        isSorted={this.isSorted(field)}
                        field={field}
                    />
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
    sortedBy: PropTypes.string,
    hasScroll: PropTypes.bool,
};

Head.defaultProps = {
    columns: undefined,
    sortDirection: undefined,
    defaultSortDirection: 'asc',
    sortedBy: undefined,
    hasScroll: false,
};
