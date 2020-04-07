import React from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import Spinner from '../../Spinner';
import StyledSpinnerContainer from './styled/spinnerContainer';
import StyledTable from '../styled/table';

export default function PreviewTable(props) {
    const { columns, data, isLoading } = props;

    if (isLoading) {
        return (
            <StyledSpinnerContainer>
                <Spinner />
            </StyledSpinnerContainer>
        );
    }
    return (
        <StyledTable keyField="id" data={data}>
            {columns.map(col => (
                <Column key={col} header={col} field={col} />
            ))}
        </StyledTable>
    );
}

PreviewTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
