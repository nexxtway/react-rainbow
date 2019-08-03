import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../Table';
import Column from '../../Column';

export default function StepFour(props) {
    const { schemaFields, dataToImport } = props;
    const previewData = dataToImport.slice(0, 5);

    return (
        <Table className="rainbow-import-records-flow_table" keyField="id" data={previewData}>
            {schemaFields.map((field, index) => {
                const key = `column-${index}`;
                return <Column key={key} header={field} field={field} />;
            })}
        </Table>
    );
}

StepFour.propTypes = {
    schemaFields: PropTypes.array,
    dataToImport: PropTypes.array,
};

StepFour.defaultProps = {
    schemaFields: [],
    dataToImport: [],
};
