import React from 'react';
import PropTypes from 'prop-types';

const componentMap = {
    Chart: 'https://www.chartjs.org',
};

export default function DescriptionLink({ name }) {
    if (componentMap[name]) {
        return (
            <a
                className="react-rainbow-component-description-link rainbow-font-size-heading_small rainbow-color_brand-active"
                href={componentMap[name]}
                target="_blank"
                rel="noopener noreferrer">
                    {componentMap[name]}
            </a>
        );
    }
    return null;
}

DescriptionLink.propTypes = {
    name: PropTypes.string,
};

DescriptionLink.defaultProps = {
    name: undefined,
};
