import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../Table';
import Column from '../../Column';
import getFieldAssignedPreviewData from '../helpers/getFieldAssignedPreviewData';

export default function Preview(props) {
    const { field, fileFields, data, attributes } = props;
    const mappedData = getFieldAssignedPreviewData(data, field, fileFields, attributes);

    if (fileFields.length) {
        const fieldsToAssing = fileFields.join(',');
        const fieldWord = fileFields.length > 1 ? 'fields' : 'field';
        return (
            <div>
                <p className="rainbow-import-records-flow_step-three-assign-field-modal-preview-text">
                    Assigning
                    <b className="rainbow-import-records-flow_step-three-assign-field-modal-preview-bold-text">
                        {` “${fieldsToAssing}”`}
                    </b>{' '}
                    {`${fieldWord} to`}
                    <b className="rainbow-import-records-flow_step-three-assign-field-modal-preview-bold-text">
                        {` “${field}”`}
                    </b>{' '}
                    database field
                </p>
                <Table
                    className="rainbow-import-records-flow_table"
                    keyField="id"
                    data={mappedData}
                >
                    <Column header={field} field={field} />
                </Table>
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
