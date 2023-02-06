import React from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import getPreviewDataToImport from '../helpers/getPreviewDataToImport';
import StyledTable from '../styled/table';
import StatsCard from './statsCard';

export default function StepFour(props) {
    const { schemaFields, data, fieldsMap, attributes, validatedData, errors } = props;
    const previewData = getPreviewDataToImport(validatedData.slice(0, 5), fieldsMap, attributes);

    return (
        <>
            <StatsCard validatedData={validatedData} data={data} errors={errors} />
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
    data: PropTypes.array,
    fieldsMap: PropTypes.object,
    attributes: PropTypes.object,
    validatedData: PropTypes.array,
    errors: PropTypes.array,
};

StepFour.defaultProps = {
    schemaFields: [],
    data: [],
    fieldsMap: {},
    attributes: {},
    validatedData: [],
    errors: [],
};
