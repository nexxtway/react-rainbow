import React from 'react';
import PropTypes from 'prop-types';
import { SELECTABLE_CHECKBOX } from '../helpers/columns';
import StyledTdLoadingContainer from './styled/tdLoadingContainer';
import StyledLoadingCell from './styled/loadingCell';
import StyledElementLoading from './styled/elementLoading';

const widths = ['40%', '60%', '70%', '85%', '95%'];

function getRandomWidth() {
    return widths[Math.floor(Math.random() * widths.length)];
}

export default function LoadingCells({ value, columns }) {
    if (value > 0) {
        return Array(value)
            .fill()
            .map((item, index) => {
                const key = `loading-cell-${index}`;
                const { type } = columns[index];
                const isActionOrSelectable = type === SELECTABLE_CHECKBOX || type === 'action';
                const styles = {
                    width: isActionOrSelectable ? '100%' : getRandomWidth(),
                };

                return (
                    <StyledTdLoadingContainer key={key}>
                        <StyledLoadingCell data-id="table_body--loading">
                            <StyledElementLoading style={styles} />
                        </StyledLoadingCell>
                    </StyledTdLoadingContainer>
                );
            });
    }
    return null;
}

LoadingCells.propTypes = {
    value: PropTypes.number,
    columns: PropTypes.array,
};

LoadingCells.defaultProps = {
    value: 0,
    columns: [],
};
