import React from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import getPreviewDataToImport from '../helpers/getPreviewDataToImport';
import StyledTable from '../styled/table';

export default function StepFour(props) {
    const { schemaFields, data, fieldsMap, attributes } = props;
    const previewData = getPreviewDataToImport(data.slice(0, 5), fieldsMap, attributes);

    return (
        <StyledTable keyField="id" data={previewData}>
            {schemaFields.map((field, index) => {
                const key = `column-${index}`;
                return <Column key={key} header={field} field={field} />;
            })}
        </StyledTable>
    );
}

StepFour.propTypes = {
    schemaFields: PropTypes.array,
    data: PropTypes.array,
    fieldsMap: PropTypes.object,
    attributes: PropTypes.object,
};

StepFour.defaultProps = {
    schemaFields: [],
    data: [],
    fieldsMap: {},
    attributes: {},
};
