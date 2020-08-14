import React from 'react';
import PropTypes from 'prop-types';
import StyledCellContainer from './styled/cellContainer';
import StyledCellContent from './styled/cellContent';
import StyledEnumerable from './styled/enumerable';

export default function EnumerableCell(props) {
    const { variant } = props;
    return (
        <StyledCellContainer role="gridcell" tabIndex={-1} variant={variant} hideBorderRight>
            <StyledCellContent variant={variant}>
                <StyledEnumerable variant={variant} />
            </StyledCellContent>
        </StyledCellContainer>
    );
}

EnumerableCell.propTypes = {
    variant: PropTypes.oneOf(['default', 'listview']),
};

EnumerableCell.defaultProps = {
    variant: 'default',
};
