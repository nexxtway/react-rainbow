import React from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import StyledTable from '../styled/table';
import StatsCard from './statsCard';

export default function StepFour(props) {
    const { schemaFields, validRecords, invalidRecords } = props;
    const previewData = validRecords.slice(0, 5);
    return (
        <>
            <StatsCard validRecords={validRecords} invalidRecords={invalidRecords} />
            <StyledTable keyField="id" data={previewData} variant="listview">
                {schemaFields.map((field, index) => {
                    const key = `column-${index}`;
                    return (
                        <Column
                            key={key}
                            header={field}
                            field={field}
                            headerAlignment="left"
                            cellAlignment="left"
                        />
                    );
                })}
            </StyledTable>
        </>
    );
}

StepFour.propTypes = {
    schemaFields: PropTypes.array,
    validRecords: PropTypes.array,
    invalidRecords: PropTypes.array,
};

StepFour.defaultProps = {
    schemaFields: [],
    validRecords: [],
    invalidRecords: [],
};
