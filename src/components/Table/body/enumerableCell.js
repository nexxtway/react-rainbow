import React from 'react';
import StyledCellContainer from './styled/cellContainer';
import StyledCellContent from './styled/cellContent';
import StyledEnumerable from './styled/enumerable';

export default function EnumerableCell() {
    return (
        <StyledCellContainer role="gridcell" tabIndex={-1} hideBorderRight>
            <StyledCellContent>
                <StyledEnumerable />
            </StyledCellContent>
        </StyledCellContainer>
    );
}
