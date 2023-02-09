import React from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import Spinner from '../../Spinner';
import StyledSpinnerContainer from './styled/spinnerContainer';
import { TableContainer, StyledTable } from './styled/container';

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
        <TableContainer>
            <StyledTable keyField="id" data={data} minColumnWidth={180} variant="listview">
                {columns.map(col => (
                    <Column
                        key={col}
                        header={col}
                        field={col}
                        headerAlignment="left"
                        cellAlignment="left"
                    />
                ))}
            </StyledTable>
        </TableContainer>
    );
}

PreviewTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
