import React from 'react';
import PropTypes from 'prop-types';
import Section from './section';

function resolveComma(items, index) {
    if (index === 3 || index === items.length - 1) {
        return '';
    }
    return ',';
}

function getVisibleName(items, index) {
    if (index < items.length && index < 4) {
        return `${items[index].visibleName}${resolveComma(items, index)}`;
    }
    return '';
}

function getDescription(items) {
    return `${getVisibleName(items, 0)} ${getVisibleName(items, 1)} ${getVisibleName(items, 2)} ${getVisibleName(items, 3)}`;
}

export default function Sections(props) {
    const { items, selectedItem, searchTerm } = props;

    return items.map(({ heading, visibleName, slug, content }) => {
        if (heading) {
            return (
                <Section
                    key={slug}
                    label={visibleName}
                    items={content.props.items}
                    selectedItem={selectedItem}
                    searchTerm={searchTerm}
                    description={getDescription(content.props.items)} />
            );
        } return null;
    });
}

Sections.propTypes = {
    items: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    selectedItem: PropTypes.string.isRequired,
};
