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

    resize(event, columnIndex, newWidth) {
        const { columnWidths } = this.state;
        const newColumnWidths = columnWidths.map((width, index) => {
            if (index === columnIndex) {
                return newWidth;
            }
            return width;
        });
        this.setState({ columnWidths: newColumnWidths });
    }

    render() {
        const { columns, selectedColumn, sortDirection } = this.props;

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
                        onResize={this.resize}
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
};

Head.defaultProps = {
    columns: undefined,
    sortDirection: 'asc',
    selectedColumn: undefined,
};
