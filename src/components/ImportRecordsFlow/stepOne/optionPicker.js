import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import {
    IconContainer,
    OptionContainer,
    OptionDescription,
    OptionLeftContent,
    OptionName,
    StyledFile,
    StyledMergeFiles,
} from './styled/optionPicker';

export default function OptionPicker({ name, label, description, value }) {
    const isSelected = value === name;
    const isMerge = name === 'merge-records';
    return (
        <OptionContainer isSelected={isSelected}>
            <OptionLeftContent>
                <OptionName>{label}</OptionName>
                <OptionDescription>{description}</OptionDescription>
            </OptionLeftContent>
            <IconContainer>
                <RenderIf isTrue={!isMerge}>
                    <StyledFile />
                </RenderIf>
                <RenderIf isTrue={isMerge}>
                    <StyledMergeFiles />
                </RenderIf>
            </IconContainer>
        </OptionContainer>
    );
}

OptionPicker.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string,
};

OptionPicker.defaultProps = {
    name: undefined,
    label: undefined,
    description: undefined,
    value: undefined,
};
