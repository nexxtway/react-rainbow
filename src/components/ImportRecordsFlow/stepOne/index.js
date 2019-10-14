import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VisualPickerOption from '../../VisualPickerOption';
import VisualPickerOptionFooter from '../../VisualPickerOptionFooter';
import RenderIf from '../../RenderIf';
import Select from '../../Select';
import AddRecordsIcon from '../icons/addRecords';
import MergeRecordsIcon from '../icons/mergeRecords';
import getSchemaFieldOptions from '../helpers/getSchemaFieldOptions';
import StyledContainer from './styled/container';
import StyledVisualPicker from './styled/visualPicker';

export default function StepOne(props) {
    const { schemaFields, actionOption, onChangeAction, matchField, onChangeMatchField } = props;
    const [fieldOptions, setFieldOptions] = useState([]);
    const isMergeOption = actionOption === 'merge-records';

    useEffect(() => {
        setFieldOptions(getSchemaFieldOptions(schemaFields));
    }, [schemaFields]);

    return (
        <StyledContainer>
            <StyledVisualPicker
                label="Select the option type that do you want to do"
                onChange={onChangeAction}
                value={actionOption}
            >
                <VisualPickerOption
                    name="add-records"
                    footer={<VisualPickerOptionFooter label="Add new records" />}
                >
                    <AddRecordsIcon />
                </VisualPickerOption>
                <VisualPickerOption
                    name="merge-records"
                    footer={<VisualPickerOptionFooter label="Merge exist records" />}
                >
                    <MergeRecordsIcon />
                </VisualPickerOption>
            </StyledVisualPicker>
            <RenderIf isTrue={isMergeOption}>
                <Select
                    label="Match Field"
                    placeholder="Select the Field do you want match"
                    options={fieldOptions}
                    onChange={event => onChangeMatchField(event.target.value)}
                    value={matchField}
                />
            </RenderIf>
        </StyledContainer>
    );
}

StepOne.propTypes = {
    schemaFields: PropTypes.array,
    actionOption: PropTypes.string,
    onChangeAction: PropTypes.func,
    matchField: PropTypes.string,
    onChangeMatchField: PropTypes.func,
};

StepOne.defaultProps = {
    schemaFields: [],
    actionOption: '',
    onChangeAction: () => {},
    matchField: '',
    onChangeMatchField: () => {},
};
