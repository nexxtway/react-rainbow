import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from '../../Table';
import Column from '../../Column';
import getAssignFieldsData from '../helpers/getAssignFieldsData';
import ModifyCell from './modifyCell';
import FileFieldCell from './fileFieldCell';
import DatabaseFieldCell from './databaseFieldCell';
import AssignFieldModal from './assignFieldModal';
import './styles.css';

export default function StepThree(props) {
    const { attributes, columns, onAssignField, fieldsMap, data, matchField } = props;
    const previewData = data.slice(0, 3);

    const [assignData, setAssignData] = useState([]);
    useEffect(() => {
        setAssignData(
            getAssignFieldsData({
                fieldsMap,
                attributes,
                matchField,
            }),
        );
    }, [fieldsMap, attributes, matchField]);

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
                <Column header="CSV titles" field="fileField" component={FileFieldCell} />
                <Column
                    header="Database fields"
                    field="databaseField"
                    component={DatabaseFieldCell}
                />
            </Table>
            <AssignFieldModal
                attributes={attributes}
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
    onAssignField: PropTypes.func,
    fieldsMap: PropTypes.object,
    data: PropTypes.array,
    attributes: PropTypes.object,
};

StepThree.defaultProps = {
    onAssignField: () => {},
    fieldsMap: {},
    data: [],
    attributes: {},
};
