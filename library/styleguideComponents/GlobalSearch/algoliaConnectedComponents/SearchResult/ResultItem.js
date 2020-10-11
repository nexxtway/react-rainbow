import React from 'react';
import PropTypes from 'prop-types';
import { connectHighlight } from 'react-instantsearch-dom';
import { ItemContainer, LeftContent, RightContent, Label, Title, Description } from '../../styled';
import HighlightedText from '../../../../../src/components/HighlightedText';

const HighlighAttribute = connectHighlight(({ highlight, attribute, hit }) => {
    const partsInAlgoliaFormat = highlight({
        highlightProperty: '_highlightResult',
        attribute,
        hit,
    });
    const partsInRainbowFormat = partsInAlgoliaFormat.map(part => ({
        value: part.value,
        type: part.isHighlighted ? 'hit' : 'text',
    }));

    return <HighlightedText parts={partsInRainbowFormat} />;
});

const ResultItem = hit => {
    const { type, url } = hit;

    return (
        <ItemContainer href={url}>
            <LeftContent>
                <Label>{type}</Label>
            </LeftContent>
            <RightContent>
                <Title>
                    <HighlighAttribute attribute="text" hit={hit} />
                </Title>
                <Description>
                    <HighlighAttribute attribute="description" hit={hit} />
                </Description>
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
