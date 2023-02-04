import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import getAssignFieldsData from '../helpers/getAssignFieldsData';
import CSVCell from './csvCell';
import DatabaseFieldCell from './databaseFieldCell';
import AssignFieldModal from './assignFieldModal';
import StyledTable from './styled/table';

export default function StepThree(props) {
    const { attributes, columns, onAssignField, fieldsMap, data, matchField, borderRadius } = props;
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
            <StyledTable keyField="id" data={assignData} variant="listview">
                <Column
                    defaultWidth={200}
                    header="Database fields"
                    field="databaseField"
                    component={rowProps => (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <DatabaseFieldCell {...rowProps} borderRadius={borderRadius} />
                    )}
                    headerAlignment="left"
                    cellAlignment="left"
                />
                <Column
                    field="fileField"
                    header="Fields on your CSV"
                    component={rowProps => (
                        <CSVCell
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...rowProps}
                            onClick={openAssignFieldModal}
                            borderRadius={borderRadius}
                        />
                    )}
                    headerAlignment="left"
                    cellAlignment="left"
                />
            </StyledTable>
            <AssignFieldModal
                attributes={attributes}
                isAssignFieldModalOpen={isAssignFieldModalOpen}
                onRequestClose={closeAssignFieldModal}
                columns={columns}
                databaseFieldToAssign={databaseFieldToAssign}
                onAssignField={onAssignField}
                fieldsMap={fieldsMap}
                data={previewData}
                borderRadius={borderRadius}
            />
        </div>
    );
}

StepThree.propTypes = {
    onAssignField: PropTypes.func,
    fieldsMap: PropTypes.object,
    data: PropTypes.array,
    attributes: PropTypes.object,
    matchField: PropTypes.string,
    columns: PropTypes.array,
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

StepThree.defaultProps = {
    onAssignField: () => {},
    fieldsMap: {},
    data: [],
    attributes: {},
    matchField: '',
    columns: [],
    borderRadius: 'rounded',
};
