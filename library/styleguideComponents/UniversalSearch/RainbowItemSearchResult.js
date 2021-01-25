import React from 'react';
import PropTypes from 'prop-types';
import LabelText from './labelText';
import DescriptionText from './descriptionText';
import { ResultItemContainer, IconContainer, OptionText } from './styled';

const RainbowItemSearchResult = props => {
    const { icon, title, description } = props;

    return (
        <ResultItemContainer>
            <IconContainer>{icon}</IconContainer>
            <OptionText>
                <LabelText value={title} />
                <DescriptionText value={description} />
            </OptionText>
        </ResultItemContainer>
    );
};

RainbowItemSearchResult.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.array,
    description: PropTypes.array,
};

RainbowItemSearchResult.defaultProps = {
    icon: undefined,
    title: undefined,
    description: undefined,
};

export default RainbowItemSearchResult;
