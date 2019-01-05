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
        resizeColumnDisabled,
        minColumnWidth,
        maxColumnWidth,
    } = props;

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
                    width={width}
                    resizeColumnDisabled={resizeColumnDisabled}
                    minColumnWidth={minColumnWidth}
                    maxColumnWidth={maxColumnWidth} />
            );
        });
    }
    return null;
}

Head.propTypes = {
    columns: PropTypes.array,
    sortDirection: PropTypes.string,
    selectedColumn: PropTypes.number,
    resizeColumnDisabled: PropTypes.bool,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
};

Head.defaultProps = {
    columns: undefined,
    sortDirection: 'asc',
    selectedColumn: undefined,
    resizeColumnDisabled: false,
    minColumnWidth: 50,
    maxColumnWidth: 1000,
};
