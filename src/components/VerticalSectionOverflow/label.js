import React from 'react';
import PropTypes from 'prop-types';

export default function OpenCloseLabel({ expandedLabel, collapsedLabel, expanded }) {
    if (expanded) {
        return <span className="slds-nav-vertical__action-text">{collapsedLabel}</span>;
    }
    return <span className="slds-nav-vertical__action-text">{expandedLabel}</span>;
}
OpenCloseLabel.propTypes = {
    expandedLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    collapsedLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    expanded: PropTypes.bool.isRequired,
};
