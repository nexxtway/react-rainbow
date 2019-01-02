import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import Header from './header';

export default class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnWidths: props.columns.map(column => column.width),
        };
        this.resize = this.resize.bind(this);
    }

    resize(event, columnIndex, width) {
        const { columnWidths } = this.state;
        columnWidths[columnIndex] = width;
        this.setState({ columnWidths });
    }

    render() {
        const { columns, selectedColumn, onColumnSelect, sortDirection } = this.props;

        if (columns) {
            const { columnWidths } = this.state;
            return columns.map((column, index) => {
                const { header, sortable } = column;
                const width = columnWidths[index];
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
                        onResize={this.resize}
                        width={width}
                        columns={columns.length} />
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
};

Head.defaultProps = {
    columns: undefined,
    sortDirection: 'asc',
    selectedColumn: undefined,
    onColumnSelect: () => {},
};
