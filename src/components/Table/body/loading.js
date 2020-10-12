import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import LoadingCells from './loadingCells';
import StyledRow from './styled/row';

export default function Loading({ columns }) {
    const columnsLength = columns.length;
    return (
        <Fragment>
            <StyledRow>
                <LoadingCells columns={columns} value={columnsLength} />
            </StyledRow>
            <StyledRow>
                <LoadingCells columns={columns} value={columnsLength} />
            </StyledRow>
            <StyledRow>
                <LoadingCells columns={columns} value={columnsLength - 1} />
            </StyledRow>
            <StyledRow>
                <LoadingCells columns={columns} value={columnsLength - 3} />
            </StyledRow>
        </Fragment>
    );
}

Loading.propTypes = {
    columns: PropTypes.array,
};

Loading.defaultProps = {
    columns: [],
};
