import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import Header from './header';

export default class Head extends Component {
    render() {
        const { columns, selectedColumn, onColumnSelect, sortDirection, onResize } = this.props;

        if (columns) {
            return columns.map((column, index) => {
                const { header, sortable, width } = column;
                const isSelected = index === selectedColumn;
                return (
                    <Header
                        key={uniqueId('header')}
                        content={header}
                        sortable={sortable}
                        sortDirection={sortDirection}
                        isSelected={isSelected}
                        columnIndex={index}
                        onColumnSelect={onColumnSelect}
                        onResize={onResize}
                        width={width} />
                );
            });
        }
        return null;
    }
}

Head.propTypes = {
    columns: PropTypes.array,
    sortDirection: PropTypes.string,
    selectedColumn: PropTypes.number,
    onColumnSelect: PropTypes.func,
    onResize: PropTypes.func,
};

Head.defaultProps = {
    columns: undefined,
    sortDirection: 'asc',
    selectedColumn: undefined,
    onColumnSelect: () => {},
    onResize: () => {},
};
