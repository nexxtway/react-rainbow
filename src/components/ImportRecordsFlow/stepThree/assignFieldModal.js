import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Modal';
import getFileFieldsOptions from '../helpers/getFileFieldsOptions';
import AssignFieldModalTitle from './assignFieldModalTitle';
import AssignFieldModalFooter from './assignFieldModalFooter';
import SelectedFieldsToAssign from './selectedFieldsToAssign';
import Preview from './preview';
import StyledModalContainer from './styled/modalContainer';
import StyledSelect from './styled/select';

export default function AssignFieldModal(props) {
    const {
        isAssignFieldModalOpen,
        onRequestClose,
        columns,
        databaseFieldToAssign,
        onAssignField,
        fieldsMap,
        data,
        attributes,
        borderRadius,
    } = props;
    const modalTitle = <AssignFieldModalTitle field={databaseFieldToAssign} />;
    const hasAssignRef = useRef(false);

    const [fileFieldsOptions, setFileFieldsOptions] = useState([]);
    useEffect(() => {
        if (fieldsMap[databaseFieldToAssign]) {
            const options = columns.filter(
                item => !fieldsMap[databaseFieldToAssign].split(',').includes(item),
            );
            return setFileFieldsOptions(getFileFieldsOptions(options));
        }
        return setFileFieldsOptions(getFileFieldsOptions(columns));
    }, [columns, databaseFieldToAssign, fieldsMap, isAssignFieldModalOpen]);

    const [fileFieldsToAssign, setFileFieldsToAssign] = useState([]);
    const isAssignButtonDisabled = !hasAssignRef.current && fileFieldsToAssign.length === 0;
    useEffect(() => {
        if (fieldsMap[databaseFieldToAssign]) {
            if (fieldsMap[databaseFieldToAssign].split(',').length > 0) {
                hasAssignRef.current = true;
            }
            return setFileFieldsToAssign(fieldsMap[databaseFieldToAssign].split(','));
        }
        return setFileFieldsToAssign(() => {
            hasAssignRef.current = false;
            return [];
        });
    }, [fieldsMap, databaseFieldToAssign, isAssignFieldModalOpen]);

    const handleAssign = () => {
        onRequestClose();
        onAssignField(databaseFieldToAssign, fileFieldsToAssign);
    };

    const selectFileField = event => {
        const { value } = event.target;
        setFileFieldsOptions(fileFieldsOptions.filter(field => field.value !== value));
        setFileFieldsToAssign([...fileFieldsToAssign, value]);
    };

    const deleteFileField = value => {
        setFileFieldsOptions([
            ...fileFieldsOptions,
            {
                label: value,
                value,
            },
        ]);
        setFileFieldsToAssign(fileFieldsToAssign.filter(field => field !== value));
    };

    const hasNotFileFieldsToAssign = !fileFieldsToAssign.length;

    return (
        <Modal
            title={modalTitle}
            isOpen={isAssignFieldModalOpen}
            size="small"
            onRequestClose={onRequestClose}
            footer={
                <AssignFieldModalFooter
                    onCancel={onRequestClose}
                    onAssign={handleAssign}
                    isAssignButtonDisabled={isAssignButtonDisabled}
                    borderRadius={borderRadius}
                />
            }
            borderRadius={borderRadius}
        >
            <StyledModalContainer hasNotFileFieldsToAssign={hasNotFileFieldsToAssign}>
                <StyledSelect
                    label="Select Field To Assign"
                    options={fileFieldsOptions}
                    onChange={selectFileField}
                    value="default"
                    borderRadius={borderRadius}
                />
                <SelectedFieldsToAssign
                    values={fileFieldsToAssign}
                    onDelete={deleteFileField}
                    borderRadius={borderRadius}
                />
                <Preview
                    field={databaseFieldToAssign}
                    fileFields={fileFieldsToAssign}
                    data={data}
                    attributes={attributes}
                />
            </StyledModalContainer>
        </Modal>
    );
}

AssignFieldModal.propTypes = {
    isAssignFieldModalOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    columns: PropTypes.array,
    databaseFieldToAssign: PropTypes.string,
    onAssignField: PropTypes.func,
    fieldsMap: PropTypes.object,
    data: PropTypes.array,
    attributes: PropTypes.object.isRequired,
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

AssignFieldModal.defaultProps = {
    isAssignFieldModalOpen: false,
    onRequestClose: () => {},
    columns: [],
    databaseFieldToAssign: '',
    onAssignField: () => {},
    fieldsMap: {},
    data: [],
    borderRadius: 'square',
};
