import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ text }) {
    if (text) {
        return (
            <p className="rainbow-font-size-heading_small react-rainbow-component-description-text rainbow-color_dark-1">
                {text}
            </p>
        );
    }
    return null;
}

Description.propTypes = {
    text: PropTypes.string,
};

Description.defaultProps = {
    text: undefined,
};
