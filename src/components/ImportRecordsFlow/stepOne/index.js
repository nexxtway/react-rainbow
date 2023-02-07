import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import getSchemaFieldOptions from '../helpers/getSchemaFieldOptions';
import StyledContainer from './styled/container';
import { StyledRadioGroup } from './styled/optionPicker';
import OptionPicker from './optionPicker';
import StyledSelect from './styled/styledSelect';

export default function StepOne(props) {
    const { schemaFields, actionOption, onChangeAction, matchField, onChangeMatchField } = props;
    const [fieldOptions, setFieldOptions] = useState([]);
    const isMergeOption = actionOption === 'merge-records';

    useEffect(() => {
        setFieldOptions(getSchemaFieldOptions(schemaFields));
    }, [schemaFields]);

    const onChange = event => {
        onChangeAction(event.target.value);
    };

    const options = [
        {
            value: 'add-records',
            label: (
                <OptionPicker
                    name="add-records"
                    value={actionOption}
                    label="Add New records"
                    description="Allows adding all records without checking for duplicates in existing records."
                />
            ),
            name: 'add-records',
            id: 'add-records',
        },
        {
            value: 'merge-records',
            label: (
                <OptionPicker
                    name="merge-records"
                    value={actionOption}
                    label="Merge exist records"
                    description="Allows you to create only unique records avoiding duplications with existing records."
                />
            ),
            name: 'merge-records',
            id: 'merge-records',
        },
    ];

    return (
        <>
            <StyledContainer>
                <StyledRadioGroup
                    onChange={onChange}
                    value={actionOption}
                    options={options}
                    id="radio-group-component-1"
                />

                <RenderIf isTrue={isMergeOption}>
                    <StyledSelect
                        label="Match Field"
                        labelAlignment="left"
                        placeholder="Select the Field do you want match"
                        options={fieldOptions}
                        onChange={event => onChangeMatchField(event.target.value)}
                        value={matchField}
                    />
                </RenderIf>
            </StyledContainer>
        </>
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
