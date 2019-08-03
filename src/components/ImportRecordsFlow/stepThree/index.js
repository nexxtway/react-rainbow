import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from '../../Table';
import Column from '../../Column';
import Modal from '../../Modal';
import Select from '../../Select';
import getFileFieldsOptions from '../helpers/getFileFieldsOptions';
import getAssignFieldsData from '../helpers/getAssignFieldsData';
import ModifyCell from './modifyCell';
import AssignFieldModalFooter from './assignFieldModalFooter';
import SelectedFieldsToAssign from './selectedFieldsToAssign';
import FileFieldCell from './fileFieldCell';
import './styles.css';

export default function StepThree(props) {
    const { schemaFields, columns, onAssignField, fieldsMap } = props;
    const [data, setData] = useState([]);
    const [fileFieldsOptions, setFileFieldsOptions] = useState([]);
    const [databaseFieldToAssign, setDatabaseFieldToAssign] = useState([]);
    const [fileFieldsToAssign, setFileFieldsToAssign] = useState([]);
    const [isAssignFieldModalOpen, setAssignFieldModalState] = useState(false);
    const modalTitle = `Assign to the field: ${databaseFieldToAssign}`;
    const isAssignButtonDisabled = fileFieldsToAssign.length === 0;

    useEffect(() => {
        setData(getAssignFieldsData(schemaFields, fieldsMap));
    }, [schemaFields, fieldsMap]);

    useEffect(() => {
        setFileFieldsOptions(getFileFieldsOptions(columns));
    }, [columns]);

    const openAssignFieldModal = field => {
        setAssignFieldModalState(true);
        setDatabaseFieldToAssign(field);
    };

    const closeAssignFieldModal = () => {
        setAssignFieldModalState(false);
    };

    const handleAssign = () => {
        onAssignField(databaseFieldToAssign, fileFieldsToAssign);
        closeAssignFieldModal();
        setFileFieldsOptions(getFileFieldsOptions(columns));
        setFileFieldsToAssign([]);
    };

    const selectFileField = event => {
        const { value } = event.target;
        setFileFieldsOptions(fileFieldsOptions.filter(field => field.value !== value));
        setFileFieldsToAssign([...fileFieldsToAssign, value]);
    };

    const deleteFileField = value => {
        setFileFieldsOptions(
            fileFieldsOptions.concat({
                label: value,
                value,
            }),
        );
        setFileFieldsToAssign(fileFieldsToAssign.filter(field => field !== value));
    };

    return (
        <div>
            <Table className="rainbow-import-records-flow_table" keyField="id" data={data}>
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
            <Modal
                title={modalTitle}
                isOpen={isAssignFieldModalOpen}
                size="small"
                onRequestClose={closeAssignFieldModal}
                footer={
                    <AssignFieldModalFooter
                        onCancel={closeAssignFieldModal}
                        onAssign={handleAssign}
                        isAssignButtonDisabled={isAssignButtonDisabled}
                    />
                }
            >
                <div className="rainbow-import-records-flow_step-three-assign-field-modal-content">
                    <Select
                        className="rainbow-import-records-flow_step-three-field-select"
                        label="Select Field"
                        options={fileFieldsOptions}
                        onChange={selectFileField}
                        value="default"
                    />
                    <SelectedFieldsToAssign
                        values={fileFieldsToAssign}
                        onDelete={deleteFileField}
                    />
                </div>
            </Modal>
        </div>
    );
}

StepThree.propTypes = {
    schemaFields: PropTypes.array,
    onAssignField: PropTypes.func,
    fieldsMap: PropTypes.object,
};

StepThree.defaultProps = {
    schemaFields: [],
    onAssignField: () => {},
    fieldsMap: {},
};
