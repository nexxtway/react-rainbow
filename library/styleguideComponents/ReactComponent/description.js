import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ text }) {
    if (text) {
        return (
            <p className="slds-text-heading_small slds-m-top_medium slds-react-component-description-text">
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
