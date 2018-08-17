import React from 'react';
import PropTypes from 'prop-types';

export default function Actions({ content }) {
    if (content) {
        return <div className="slds-no-flex">{content}</div>;
    }
    return null;
}

Actions.propTypes = {
    content: PropTypes.node,
};
Actions.defaultProps = {
    content: null,
};
