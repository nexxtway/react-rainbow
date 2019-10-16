import React from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import getFieldAssignedPreviewData from '../helpers/getFieldAssignedPreviewData';
import StyledPreviewText from './styled/previewText';
import StyledTable from '../styled/table';

export default function Preview(props) {
    const { field, fileFields, data, attributes } = props;
    const mappedData = getFieldAssignedPreviewData(data, field, fileFields, attributes);

    if (fileFields.length) {
        const fieldsToAssing = fileFields.join(',');
        const fieldWord = fileFields.length > 1 ? 'fields' : 'field';
        return (
            <div>
                <StyledPreviewText>
                    Assigning
                    <b>{` “${fieldsToAssing}”`}</b> {`${fieldWord} to`}
                    <b>{` “${field}”`}</b> database field
                </StyledPreviewText>
                <StyledTable keyField="id" data={mappedData}>
                    <Column header={field} field={field} />
                </StyledTable>
            </div>
        );
    }
    return null;
}

Preview.propTypes = {
    field: PropTypes.string,
    fileFields: PropTypes.array,
    data: PropTypes.array,
    attributes: PropTypes.object.isRequired,
};

Preview.defaultProps = {
    field: '',
    fileFields: [],
    data: [],
};
