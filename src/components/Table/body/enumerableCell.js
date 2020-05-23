import React from 'react';
import PropTypes from 'prop-types';
import StyledCell from './styled/cell';
import StyledCellContent from './styled/cellContent';
import StyledEnumerable from './styled/enumerable';

export default function EnumerableCell({ rowNumberOffset, rowIndex }) {
    const rowNumber = rowNumberOffset + rowIndex;
    return (
        <StyledCell scope="row" tabIndex={-1}>
            <StyledCellContent>
                <StyledEnumerable title={rowNumber}>{rowNumber}</StyledEnumerable>
            </StyledCellContent>
        </StyledCell>
    );
}

EnumerableCell.propTypes = {
    rowNumberOffset: PropTypes.number,
    rowIndex: PropTypes.number,
};

EnumerableCell.defaultProps = {
    rowNumberOffset: undefined,
    rowIndex: undefined,
};
