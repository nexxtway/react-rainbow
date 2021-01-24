import React from 'react';
import PropTypes from 'prop-types';
import LabelText from './labelText';
import DescriptionText from './descriptionText';
import { ResultItemContainer, IconContainer, OptionText } from './styled';

const ItemSearchResult = props => {
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

ItemSearchResult.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.array,
    description: PropTypes.array,
};

ItemSearchResult.defaultProps = {
    icon: undefined,
    title: undefined,
    description: undefined,
};

export default ItemSearchResult;
