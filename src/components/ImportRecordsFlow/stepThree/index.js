import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from '../../Table';
import Column from '../../Column';
import getAssignFieldsData from '../helpers/getAssignFieldsData';
import ModifyCell from './modifyCell';
import FileFieldCell from './fileFieldCell';
import AssignFieldModal from './assignFieldModal';
import './styles.css';

export default function StepThree(props) {
    const { schemaFields, columns, onAssignField, fieldsMap, data } = props;
    const previewData = data.slice(0, 3);

    const [assignData, setAssignData] = useState([]);
    useEffect(() => {
        setAssignData(getAssignFieldsData(schemaFields, fieldsMap));
    }, [schemaFields, fieldsMap]);

    const [isAssignFieldModalOpen, setAssignFieldModalState] = useState(false);
    const [databaseFieldToAssign, setDatabaseFieldToAssign] = useState('');
    const openAssignFieldModal = field => {
        setAssignFieldModalState(true);
        setDatabaseFieldToAssign(field);
    };

    const closeAssignFieldModal = () => {
        setAssignFieldModalState(false);
    };

    return (
        <div>
            <Table className="rainbow-import-records-flow_table" keyField="id" data={assignData}>
                <Column
                    header="Modify"
                    field="fileField"
                    component={rowProps => (
                        <ModifyCell {...rowProps} onClick={openAssignFieldModal} />
                    )}
                />
                <Column header="CSV titles" component={FileFieldCell} field="fileField" />
                <Column header="Database fields" field="databaseField" />
            </Table>
            <AssignFieldModal
                isAssignFieldModalOpen={isAssignFieldModalOpen}
                onRequestClose={closeAssignFieldModal}
                columns={columns}
                databaseFieldToAssign={databaseFieldToAssign}
                onAssignField={onAssignField}
                fieldsMap={fieldsMap}
                data={previewData}
            />
        </div>
    );
}

StepThree.propTypes = {
    schemaFields: PropTypes.array,
    onAssignField: PropTypes.func,
    fieldsMap: PropTypes.object,
    data: PropTypes.array,
};

StepThree.defaultProps = {
    schemaFields: [],
    onAssignField: () => {},
    fieldsMap: {},
    data: [],
};
