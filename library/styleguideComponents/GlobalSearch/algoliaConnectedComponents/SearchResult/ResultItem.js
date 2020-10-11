import React from 'react';
import PropTypes from 'prop-types';
import { ItemContainer, LeftContent, RightContent, Label, Title, Description } from '../../styled';

const ResultItem = props => {
    const { objectID, type, text, description, url } = props;

    return (
        <ItemContainer href={url}>
            <LeftContent>
                <Label>{type}</Label>
            </LeftContent>
            <RightContent>
                <Title>{text}</Title>
                <Description>{description}</Description>
            </RightContent>
        </ItemContainer>
    );
};

ResultItem.propTypes = {
    objectID: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
};

ResultItem.defaultProps = {
    objectID: '',
    type: '',
    text: '',
    description: '',
    url: '',
};
export default ResultItem;
